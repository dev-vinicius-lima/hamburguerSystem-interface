import LogoutIcon from '@mui/icons-material/Logout'
import { colors } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../../Constants/Paths'
import MenuList from './MenuList'
import { Container, ItemContainer, LinkMenu } from './styles'

export const SideMenuAdmin = () => {
	const navigate = useNavigate()

	const logoutUser = () => {
		if (window.confirm('Deseja realmente sair?')) {
			localStorage.removeItem('bigFomee: userData')
			navigate(Paths.login)
		} else {
			return
		}
	}
	const userData = localStorage.getItem('bigFomee: userData')

	return (
		<Container>
			{MenuList.map((item) => (
				<ItemContainer
					key={item.id}
					isActive={item.path === window.location.pathname}
					onClick={() => navigate(item.path)}
				>
					{item.icon && <item.icon id="icon" />}
					<LinkMenu to={item.path} id="label">
						{item.label}
					</LinkMenu>
				</ItemContainer>
			))}
			<ItemContainer style={{ marginTop: '5rem' }} onClick={logoutUser}>
				<LogoutIcon style={{ color: colors.red[500] }} />
				<LinkMenu to={userData ? '' : Paths.login} style={{ color: colors.red[500] }}>
					Sair
				</LinkMenu>
			</ItemContainer>
		</Container>
	)
}
