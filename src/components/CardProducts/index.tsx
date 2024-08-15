import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, ProductName, ProductPrice } from './styles'

interface CardProductsProps {
	product: {
		id: number
		name: string
		url: string
		offer: boolean
		price: number
		formatedPrice: string
		quantity: number
	}
}

export const CardProducts = ({ product }: CardProductsProps) => {
	const { putProductsInCart } = useCart()
	return (
		<Container>
			<img src={product.url} alt={product.name} />
			<div>
				<ProductName>{product.name}</ProductName>
				<ProductPrice>{product.formatedPrice}</ProductPrice>
				<Button
					onClick={() => {
						putProductsInCart({ ...product, quantity: 1 })
					}}
					id="link"
				>
					Adicionar
				</Button>
			</div>
		</Container>
	)
}
