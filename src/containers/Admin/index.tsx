import { SideMenuAdmin, SideMenuBottomAdmin } from '../../components'
import { Paths } from '../../Constants/Paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, Wrapper } from './styles'
export const Admin = () => {
	return (
		<Container>
			{window.innerWidth >= 800 && <SideMenuAdmin />}

			<Wrapper>
				{window.innerWidth <= 768 && <SideMenuBottomAdmin />}
				{window.location.pathname === Paths.orders && <Orders />}
				{window.location.pathname === Paths.listProduct && <ListProducts />}
				{window.location.pathname === Paths.EditProducts && <EditProduct />}
				{window.location.pathname === Paths.newProduct && <NewProduct />}
			</Wrapper>
		</Container>
	)
}
