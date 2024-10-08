import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button, ErrorMessage } from '../../components'
import { Paths } from '../../Constants/Paths'
import { useUser } from '../../hooks/UserContext'
import apiBigFomee from '../../services/api'
import { Container, LoginImage, ContainerItens, Input, Label, P } from './styles'

interface Inputs {
	email: string
	password: string
}

interface UseUserReturn {
	putUserData: (data: string) => void
	userData: string
}

const schema = Yup.object().shape({
	email: Yup.string().email('Email inválido').required('O campo Email é obrigatório!'),
	password: Yup.string().required('O campo Senha é obrigatória!').min(6, 'A senha deve ter pelo menos 6 digitos!'),
})
export function Login() {
	const { putUserData } = useUser() as UseUserReturn
	const navigation = useNavigate()

	const notify = () =>
		toast.success('Login efetuado com sucesso!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
			transition: Bounce,
		})
	const errorNotify = () =>
		toast.error('Email ou senha inválido!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
			transition: Bounce,
		})
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	})
	const onSubmit: SubmitHandler<Inputs> = async (clientData) => {
		try {
			const { data } = await apiBigFomee.post('/sessions', {
				email: clientData.email,
				password: clientData.password,
			})
			putUserData(data)

			if (data.token) {
				localStorage.setItem('token', data.token)

				setTimeout(() => {
					{
						data.admin ? navigation(Paths.orders) : navigation(Paths.home)
					}
				}, 1000)
				notify()
			}
		} catch (error) {
			console.log(error)
			errorNotify()
		}
	}

	return (
		<Container>
			<LoginImage />
			<ContainerItens>
				<h1>Login</h1>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label htmlFor="email">Email:</Label>
					<Input
						type="email"
						placeholder="exemplo@exemplo.com"
						id="email"
						{...register('email')}
						style={{ border: errors.email ? '3px solid #cb1819' : '' }}
					/>
					<ErrorMessage>{errors.email?.message}</ErrorMessage>
					<Label htmlFor="password">Senha:</Label>
					<Input
						type="password"
						placeholder="********"
						id="password"
						{...register('password')}
						style={{ border: errors.password ? '3px solid #cb1819' : '' }}
					/>
					<ErrorMessage>{errors.password?.message}</ErrorMessage>
					<Button type={'submit'} style={{ margin: '15px 0' }}>
						Entrar
					</Button>
				</form>
				<P>
					Não possui uma conta?
					<Link to={Paths.register} id="SignLink">
						cadastre-se
					</Link>
				</P>
			</ContainerItens>
		</Container>
	)
}
