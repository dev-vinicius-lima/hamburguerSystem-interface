import { ContainerButton } from './styles'

interface ChildrenProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export function Button({ children, ...rest }: ChildrenProps) {
	return <ContainerButton {...rest}>{children}</ContainerButton>
}
