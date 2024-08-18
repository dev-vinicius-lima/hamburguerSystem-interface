import { Link, useRouteError } from 'react-router-dom'

import './styles.ts'
import { Paths } from '../../Constants/Paths.ts'
import { Container } from './styles.ts'

export const NotFound = () => {
	const error = useRouteError()
	console.log(error)
	return (
		<Container>
			<h1>Desculpe mas está página nao foi encontrada...</h1>
			<Link to={Paths.login} id="link">
				Voltar para login
			</Link>
		</Container>
	)
}
