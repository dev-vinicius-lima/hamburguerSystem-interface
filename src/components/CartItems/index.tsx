import { useCart } from '../../hooks/CartContext'
import formatPrice from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export const CartItems = () => {
	const { cartProducts, increaseProductsQuantity, decreaseProductsQuantity } = useCart()
	return (
		<Container>
			<Header>
				<p></p>
				<p>Itens</p>
				<p>Preço</p>
				<p>Quantidade</p>
				<p>Total</p>
			</Header>

			{cartProducts && cartProducts.length > 0 ? (
				cartProducts.map((product) => (
					<Body key={product.id}>
						<img src={product.url} alt={product.name} />
						<p>{product.name}</p>
						<p>{product.formatedPrice}</p>
						<div id="quantityContainer">
							<button
								id="decrementButton"
								onClick={() => {
									decreaseProductsQuantity(product)
								}}
							>
								-
							</button>
							<p>{product.quantity}</p>
							<button id="incrementButton" onClick={() => increaseProductsQuantity(product)}>
								+
							</button>
						</div>
						<p>{formatPrice(product.price * product.quantity)}</p>
					</Body>
				))
			) : (
				<EmptyCart>Nenhum item no seu carrinho...</EmptyCart>
			)}
		</Container>
	)
}
