import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { Icons } from '../Icons'
import { Container, ContainerLeft, ContainerRigth, ContainerText, Line, PageLink } from './styles'

interface UserData {
	name: string
	email: string
}

export const Header = () => {
	const navigate = useNavigate()

	const { pathname } = useLocation()
	const { userData } = useUser() as { userData: UserData }

	const isActiveLink = (link: string) => {
		return pathname === link ? { color: '#fa8b0d' } : {}
	}

	const logoutUser = () => {
		const confirmationLogout = window.confirm('Deseja realmente sair?')
		if (confirmationLogout) {
			localStorage.removeItem('bigFomee: userData')
			navigate('/login')
		}
		isActiveLink
		return
	}

	const counterProductsInCart = () => {
		const clientCartData = localStorage.getItem('bigFomee: CartInfo')

		if (clientCartData) {
			return JSON.parse(clientCartData).length
		}

		return 0
	}

	return (
		<Container>
			<ContainerLeft>
				<PageLink>
					<Link to={'/'} id="link" style={isActiveLink('/')}>
						Home
					</Link>
				</PageLink>
				<PageLink>
					<Link to={'/produtos'} id="link" style={isActiveLink('/produtos')}>
						Produtos
					</Link>
				</PageLink>
			</ContainerLeft>

			<ContainerRigth>
				<PageLink style={{ color: pathname === '/produtos' ? '#fa8b0d' : '' }}>
					<Link to={'/carrinho'} id="link">
						{Icons.cart}
						{counterProductsInCart && <span>{counterProductsInCart()}</span>}
					</Link>
				</PageLink>
				<Line></Line>
				<PageLink>
					<Link to={'/login'} id="link">
						{Icons.person}
					</Link>
				</PageLink>

				<ContainerText>
					<p>Olá, {userData?.name}</p>
					<PageLink id="link" onClick={logoutUser}>
						{Icons.logout} Sair
					</PageLink>
				</ContainerText>
			</ContainerRigth>
		</Container>
	)
}
