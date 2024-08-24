import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Paths } from '../../Constants/Paths'
import { useUser } from '../../hooks/UserContext'
import { Icons } from '../Icons'
import { Container, ContainerLeft, ContainerRigth, ContainerText, Line, PageLink } from './styles'
import { useCart } from '../../hooks/CartContext'

interface UserData {
	name: string
	email: string
}

export const Header = () => {
	const navigate = useNavigate()

	const { pathname } = useLocation()
	const { userData } = useUser() as { userData: UserData }
	const { quantityCartProducts } = useCart()

	const isActiveLink = (link: string) => {
		return pathname === link ? { color: '#fa8b0d' } : {}
	}

	const logoutUser = () => {
		const confirmationLogout = window.confirm('Deseja realmente sair?')
		if (confirmationLogout) {
			localStorage.removeItem('bigFomee: userData')
			navigate(Paths.login)
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
					<Link to={Paths.home} id="link" style={isActiveLink(Paths.home)}>
						Home
					</Link>
				</PageLink>
				<PageLink>
					<Link to={Paths.products} id="link" style={isActiveLink(Paths.products)}>
						Produtos
					</Link>
				</PageLink>
			</ContainerLeft>

			<ContainerRigth>
				<PageLink style={{ color: pathname === Paths.products ? '#fa8b0d' : '' }}>
					<Link to={Paths.cart} id="link">
						{Icons.cart}
						{quantityCartProducts > 0 && <div id="counter">{counterProductsInCart()}</div>}
					</Link>
				</PageLink>
				<Line></Line>
				<PageLink>
					<Link to={Paths.login} id="link">
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
