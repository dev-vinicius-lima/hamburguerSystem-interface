import logoHome from '../../assets/BANNERHome.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, ContainerHeader, ImgHome } from './styles'
const Index = () => {
	return (
		<Container>
			<ContainerHeader>
				<ImgHome src={logoHome} />
			</ContainerHeader>
			<CategoryCarousel />
		</Container>
	)
}

export default Index
