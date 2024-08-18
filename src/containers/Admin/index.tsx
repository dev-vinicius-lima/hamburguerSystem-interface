import { SideMenuAdmin } from '../../components'
import { Paths } from '../../Constants/Paths'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, Wrapper } from './styles'
export const Admin = () => {
	return (
		<Container>
			<SideMenuAdmin />
			<Wrapper>
				{window.location.pathname === Paths.orders && <Orders />}
				{window.location.pathname === Paths.listProduct && <ListProducts />}
				{window.location.pathname === Paths.newProduct && <NewProduct />}
			</Wrapper>
		</Container>
	)
}
