import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import api from '../../services/api'
import { Container } from './styles'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
const CategoryCarousel = () => {
	const [categories, setCategories] = useState([])
	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('categories')
			setCategories(data)
			console.log(categories)
		}

		loadCategories()
	}, [])

	return (
		<>
			<Container>
				<h1>Categorias</h1>
			</Container>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				style={{ color: '#fff', width: '100%', height: '100%' }}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
			</Swiper>
		</>
	)
}

export default CategoryCarousel
