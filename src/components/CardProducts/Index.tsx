import Button from '../Button'
import { Container, ProductName, ProductPrice } from './styles'

interface CardProductsProps {
	product: {
		id: number
		name: string
		url: string
		offer: boolean
		price: number
		formatedPrice: string
	}
}

const CardProducts = ({ product }: CardProductsProps) => {
	return (
		<Container>
			<img src={product.url} alt={product.name} />
			<div>
				<ProductName>{product.name}</ProductName>
				<ProductPrice>{product.formatedPrice}</ProductPrice>
				<Button>Adicionar</Button>
			</div>
		</Container>
	)
}

export default CardProducts
