import { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, Keyboard, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import Button from '../Button'
import { Container, ContainerItens, CardProduct } from './styles'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/autoplay'

interface OffersCarouselProps {
	id: number
	name: string
	url: string
	offer: boolean
	price: number

	formatedPrice: string
}

interface ProductProps {
	id: number
	name: string
	url: string
	offer: boolean
	price: number
}

const OffersCarousel = () => {
	const [offers, setOffers] = useState<OffersCarouselProps[]>([])
	useEffect(() => {
		async function loadOffers() {
			const { data } = await api.get('products')
			const onlyOffers = data
				.filter((offer: OffersCarouselProps) => offer.offer === true)
				.map((product: ProductProps) => {
					return {
						...product,
						formatedPrice: formatCurrency(product.price),
					}
				})

			setOffers(onlyOffers)
		}

		loadOffers()
	}, [])

	return (
		<>
			<Container>
				<h1>Ofertas</h1>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, Keyboard, Autoplay]}
					spaceBetween={20}
					autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
					pagination={{ clickable: true }}
					slidesPerView={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4}
					style={{ color: '#fff', width: '100%', height: '530px' }}
				>
					{offers &&
						offers.map((offer) => (
							<SwiperSlide key={offer.id}>
								<ContainerItens>
									<CardProduct>
										<img src={offer.url} alt="imagem de ofertas" id="image" />
										<div>
											<p>{offer.name}</p>
											<span>{offer.formatedPrice}</span>
										</div>
									</CardProduct>

									<Button style={{ marginBottom: '16px' }}>Peça agora</Button>
								</ContainerItens>
							</SwiperSlide>
						))}
				</Swiper>
			</Container>
		</>
	)
}

export default OffersCarousel
