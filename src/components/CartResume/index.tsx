import { Button } from '../Button'
import { Container } from './styles'
export const CartResume = () => {
	return (
		<>
			<Container>
				<div id="resumeContainerTop">
					<h2 id="resumeTitle">Resumo do pedido</h2>
					<div id="resumeItemsContainer">
						<p id="resumeItems">itens</p>
						<p id="resumePrice">R$ 10,00</p>
					</div>
					<div id="resumeDeliveryContainer">
						<p id="resumeDelivery">taxa de entrega</p>
						<p id="resumePriceTax">R$5,00</p>
					</div>
				</div>

				<div id="resumeContainerBottom">
					<p>Total</p>
					<p>R$ 15,00</p>
				</div>
				<Button>Finalizar pedido</Button>
			</Container>
		</>
	)
}
