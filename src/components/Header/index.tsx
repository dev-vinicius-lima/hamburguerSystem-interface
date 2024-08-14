import { Link, useLocation } from 'react-router-dom'

import { Icons } from '../Icons'
import { Container, ContainerLeft, PageLink, ContainerRigth, ContainerText, Line } from './styles'

export const Header = () => {
	const { pathname } = useLocation()

	const logoutUser = () => {
		localStorage.removeItem('bigFomee: userData')
		window.location.reload()
	}

	return (
		<Container>
			<ContainerLeft>
				<PageLink>
					<Link to={'/'} id="link" style={{ color: pathname === '/' ? '#fa8b0d' : '' }}>
						Home
					</Link>
				</PageLink>
				<PageLink>
					<Link to={'/produtos'} id="link" style={{ color: pathname === '/produtos' ? '#fa8b0d' : '' }}>
						Produtos
					</Link>
				</PageLink>
			</ContainerLeft>

			<ContainerRigth>
				<PageLink style={{ color: pathname === '/produtos' ? '#fa8b0d' : '' }}>
					<Link to={'/carrinho'} id="link">
						{Icons.cart}{' '}
					</Link>
				</PageLink>
				<Line></Line>
				<PageLink>
					<Link to={'/login'} id="link">
						{Icons.person}
					</Link>
				</PageLink>

				<ContainerText>
					<p>Olá, Fulano</p>
					<PageLink id="link" onClick={logoutUser}>
						{Icons.logout} Sair
					</PageLink>
				</ContainerText>
			</ContainerRigth>
		</Container>
	)
}
