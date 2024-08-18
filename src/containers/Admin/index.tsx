import { SideMenuAdmin } from '../../components'
import Orders from './Orders'
import { Container } from './styles'
export const Admin = () => {
	return (
		<Container>
			<SideMenuAdmin />
			<Orders />
		</Container>
	)
}
