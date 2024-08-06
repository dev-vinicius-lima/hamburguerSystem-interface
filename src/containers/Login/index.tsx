import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import Button from '../../components/Button'
import apiBigFomee from '../../services/api'
import { Container, LoginImage, ContainerItens, Input, Label, P, SignLink, ErrorMessage } from './styles'

interface Inputs {
	email: string
	password: string
}

const schema = Yup.object().shape({
	email: Yup.string().email('Email inválido').required('O campo Email é obrigatório!'),
	password: Yup.string().required('O campo Senha é obrigatória!').min(6, 'A senha deve ter pelo menos 6 digitos!'),
})
function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	})
	const onSubmit: SubmitHandler<Inputs> = async (clientData) => {
		const response = await apiBigFomee.post('/sessions', {
			email: clientData.email,
			password: clientData.password,
		})

		console.log(response)
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
					Não possui uma conta? <SignLink href="">cadastre-se</SignLink>
				</P>
			</ContainerItens>
		</Container>
	)
}
export default Login
