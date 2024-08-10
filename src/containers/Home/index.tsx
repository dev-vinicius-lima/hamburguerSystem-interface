import logoHome from '../../assets/BANNERHome.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, ContainerHeader, ImgHome } from './styles'
export const Index = () => {
	return (
		<Container>
			<ContainerHeader>
				<ImgHome src={logoHome} />
			</ContainerHeader>
			<CategoryCarousel />
			<OffersCarousel />
		</Container>
	)
}
