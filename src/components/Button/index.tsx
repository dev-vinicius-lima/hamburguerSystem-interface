import { ContainerButton } from './styles'

interface ChildrenProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

function Button({ children, ...rest }: ChildrenProps) {
	return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default Button
