import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import apiBigFomee from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

const DeliveryTaxPrice = 5

export const CartResume = () => {
	const { cartProducts } = useCart()

	const sumAllProducts = cartProducts.reduce((acc, current) => {
		return current.price * current.quantity + acc
	}, 0)

	const totalPrice = sumAllProducts + DeliveryTaxPrice

	const submitOrder = async () => {
		const order = cartProducts.map((product) => {
			return {
				id: product.id,
				quantity: product.quantity,
			}
		})

		await toast.promise(apiBigFomee.post('orders', { products: order }), {
			pending: 'Enviando pedido...',
			success: 'Seu pedido foi enviado com sucesso',
			error: 'Ocorreu um erro ao enviar o pedido tente mais tarde',
		})
	}

	return (
		<Container>
			<div id="resumeContainerTop">
				<h2 id="resumeTitle">Resumo do pedido</h2>
				<div id="resumeItemsContainer">
					<p id="resumeItems">itens</p>
					<p id="resumePrice">{formatCurrency(sumAllProducts)}</p>
				</div>
				<div id="resumeDeliveryContainer">
					<p id="resumeDelivery">taxa de entrega</p>
					<p id="resumePriceTax">{formatCurrency(DeliveryTaxPrice)}</p>
				</div>
			</div>

			<div id="resumeContainerBottom">
				<p>Total</p>
				<p>{formatCurrency(totalPrice)}</p>
			</div>
			<Button style={{ marginTop: '10px' }} onClick={() => submitOrder()}>
				Finalizar pedido
			</Button>
		</Container>
	)
}
