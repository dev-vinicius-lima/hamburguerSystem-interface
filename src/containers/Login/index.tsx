import { Container, LoginImage, ContainerItens, Input, Label, P, Button, SignLink } from './styles'

function Login() {
	return (
		<Container>
			<LoginImage>
				<img src="" alt="" />
			</LoginImage>
			<ContainerItens>
				<img src="" alt="" />
				<h1>Login</h1>
				<Label htmlFor="email">Email:</Label>
				<Input type="text" placeholder="Email" id="exemplo@exemplo.com" />
				<Label htmlFor="password">Password:</Label>
				<Input type="password" placeholder="********" id="password" />
				<Button>Entrar</Button>
				<P>
					Não possui uma conta? <SignLink href="">cadastre-se</SignLink>
				</P>
			</ContainerItens>
		</Container>
	)
}
export default Login
