import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
// import Orders from './Orders'
import { Container, Wrapper } from './styles'
export const Admin = () => {
	return (
		<Container>
			<SideMenuAdmin />
			<Wrapper>
				{/* <Orders /> */}
				<ListProducts />
			</Wrapper>
		</Container>
	)
}
