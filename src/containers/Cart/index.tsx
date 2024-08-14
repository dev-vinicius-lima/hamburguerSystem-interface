import logoCart from '../../assets/BANNERHome.png'
import { CartItems, CartResume } from '../../components'
import { Container, ContainerHeader, ImgCart, Wrapper } from './styles'
export const Cart = () => {
	return (
		<Container>
			<ContainerHeader>
				<ImgCart src={logoCart} />
			</ContainerHeader>
			<Wrapper>
				<CartItems />
				<CartResume />
			</Wrapper>
		</Container>
	)
}
