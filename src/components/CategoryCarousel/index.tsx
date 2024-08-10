import { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, Keyboard, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../../components'
import api from '../../services/api'
import { Container, ContainerItens } from './styles'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/autoplay'

interface CategoryProps {
	id: number
	name: string
	url: string
}

export const CategoryCarousel = () => {
	const [categories, setCategories] = useState<CategoryProps[]>([])
	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('categories')
			setCategories(data)
			console.log(data)
		}

		loadCategories()
	}, [])

	return (
		<>
			<Container>
				<h1>Categorias</h1>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, Keyboard, Autoplay]}
					spaceBetween={20}
					autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
					pagination={{ clickable: true }}
					slidesPerView={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4}
					style={{ color: '#fff', width: '100%', height: '410px' }}
				>
					{categories &&
						categories.map((category) => (
							<SwiperSlide key={category.id}>
								<ContainerItens>
									<img src={category.url} alt="imagem do carrossel" id="image" />
									<Button>{category.name}</Button>
								</ContainerItens>
							</SwiperSlide>
						))}
				</Swiper>
			</Container>
		</>
	)
}
