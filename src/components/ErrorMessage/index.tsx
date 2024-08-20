import { ErrorMessageStyle } from './styles'

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
	return <ErrorMessageStyle>{children}</ErrorMessageStyle>
}
