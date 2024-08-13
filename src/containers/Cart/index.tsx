import logoCart from '../../assets/BANNERHome.png'
import { CartItems } from '../../components'
import { Container, ContainerHeader, ImgCart } from './styles'
export const Cart = () => {
	return (
		<Container>
			<ContainerHeader>
				<ImgCart src={logoCart} />
			</ContainerHeader>
			<CartItems />
		</Container>
	)
}
