import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Paths } from '../../Constants/Paths'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { CardProduct, Container, ContainerItens } from './styles'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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

export const OffersCarousel = () => {
	const { putProductsInCart } = useCart()
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
									<Link
										to={Paths.cart}
										id="link"
										onClick={() => {
											putProductsInCart({ ...offer, quantity: 1 })
										}}
										style={{ marginTop: '10px' }}
									>
										Peça agora
									</Link>
								</ContainerItens>
							</SwiperSlide>
						))}
				</Swiper>
			</Container>
		</>
	)
}
