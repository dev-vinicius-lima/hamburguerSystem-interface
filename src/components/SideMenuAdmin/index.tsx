import MenuList from './MenuList'
import { Container, ItemContainer, LinkMenu } from './styles'

export const SideMenuAdmin = () => {
	return (
		<Container>
			{MenuList.map((item) => (
				<ItemContainer key={item.id}>
					{item.icon && <item.icon id="icon" />}
					<LinkMenu to={item.path} id="label">
						{item.label}
					</LinkMenu>
				</ItemContainer>
			))}
		</Container>
	)
}
