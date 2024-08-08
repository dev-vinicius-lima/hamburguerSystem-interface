import logoHome from '../../assets/BANNERHome.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, ContainerHeader, ImgHome } from './styles'
const Index = () => {
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

export default Index
