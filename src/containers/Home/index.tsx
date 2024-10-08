import logoHome from '../../assets/bannerHome.jpg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Header } from '../../components'
import { Container, ContainerHeader, ImgHome } from './styles'
export const Index = () => {
	return (
		<Container>
			<Header />
			<ContainerHeader>
				<ImgHome src={logoHome} />
			</ContainerHeader>
			<CategoryCarousel />
			<OffersCarousel />
		</Container>
	)
}
