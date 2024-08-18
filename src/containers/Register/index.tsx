import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button } from '../../components'
import { Paths } from '../../Constants/Paths'
import apiBigFomee from '../../services/api'
import { Container, RegisterImage, ContainerItens, Input, Label, P, ErrorMessage } from './styles'

interface Inputs {
	name: string
	email: string
	password: string
	confirmPassword: string
}

const schema = Yup.object().shape({
	name: Yup.string().required('O campo Nome é obrigatório!'),
	email: Yup.string().email('Email inválido').required('O campo Email é obrigatório!'),
	password: Yup.string().required('O campo Senha é obrigatória!').min(6, 'A senha deve ter pelo menos 6 digitos!'),
	confirmPassword: Yup.string()
		.required('O campo Senha é obrigatória!')
		.oneOf([Yup.ref('password')], 'As senhas devem ser iguais!'),
})
export function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	})
	const onSubmit: SubmitHandler<Inputs> = async (clientData) => {
		try {
			await apiBigFomee.post('/users', {
				name: clientData.name,
				email: clientData.email,
				password: clientData.password,
			})
			if (apiBigFomee !== undefined) {
				toast.success('Cadastrado efetuado com sucesso!', {
					theme: 'dark',
				})
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error('Email já existe! Tente outro email.', {
					theme: 'dark',
				})
			}
		}
	}

	return (
		<Container>
			<RegisterImage />
			<ContainerItens>
				<h1>Cadastra-se</h1>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label htmlFor="name">Nome:</Label>
					<Input
						type="text"
						placeholder="John Doe"
						id="name"
						{...register('name')}
						style={{
							border: errors.name ? '3px solid #cb1819' : '',
							marginBottom: errors.confirmPassword ? '-0px' : '15px',
						}}
					/>
					<ErrorMessage>{errors.name?.message}</ErrorMessage>

					<Label htmlFor="email">Email:</Label>
					<Input
						type="email"
						placeholder="exemplo@exemplo.com"
						id="email"
						{...register('email')}
						style={{
							border: errors.email ? '3px solid #cb1819' : '',
							marginBottom: errors.confirmPassword ? '-0px' : '15px',
						}}
					/>
					<ErrorMessage>{errors.email?.message}</ErrorMessage>
					<Label htmlFor="password">Senha:</Label>
					<Input
						type="password"
						placeholder="******"
						id="password"
						{...register('password')}
						style={{
							border: errors.password ? '3px solid #cb1819' : '',
							marginBottom: errors.confirmPassword ? '-0px' : '15px',
						}}
					/>
					<ErrorMessage>{errors.password?.message}</ErrorMessage>

					<Label htmlFor="confirmPassword">Confirme a senha:</Label>
					<Input
						type="password"
						placeholder="******"
						id="confirmPassword"
						{...register('confirmPassword')}
						style={{
							border: errors.confirmPassword ? '3px solid #cb1819' : '',
							marginBottom: errors.confirmPassword ? '-0px' : '15px',
						}}
					/>
					<ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

					<Button type={'submit'} style={{ margin: '15px 0' }}>
						Cadastrar
					</Button>
				</form>
				<P>
					Já possui uma conta?
					<Link to={Paths.login} id="SignLink">
						Entrar
					</Link>
				</P>
			</ContainerItens>
		</Container>
	)
}
