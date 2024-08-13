import { useEffect, useState } from 'react'

import logoHome from '../../assets/bannerHamburguer.png'
import { CardProducts } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { CategoryButton, CategoryMenu, Container, ContainerHeader, ImgProducts, ProductContainer } from './styles'

interface CategoryProps {
	id: number
	name: string
	url: string
	isActiveCategory: boolean
}

interface ProductProps {
	id: number
	name: string
	url: string
	offer: boolean
	price: number
	formatedPrice: string
	category_id: number
	quantity: number
}

export const Products = () => {
	const [categories, setCategories] = useState<CategoryProps[]>([])
	const [products, setProducts] = useState<ProductProps[]>([])
	const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([])
	const [activeCategory, setActiveCategory] = useState(0)
	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('categories')

			const newCategories = [{ id: 0, name: 'Todos' }, ...data]

			setCategories(newCategories)
		}

		async function loadProducts() {
			const { data: allProducts } = await api.get('products')
			const allProductsFormatted = allProducts.map((product: ProductProps) => {
				return {
					...product,
					formatedPrice: formatCurrency(product.price),
				}
			})
			setProducts(allProductsFormatted)
		}

		loadCategories()
		loadProducts()
	}, [])

	useEffect(() => {
		const newFilteredProducts = products.filter((product) => {
			return product.category_id === activeCategory || activeCategory === 0
		})

		setFilteredProducts(newFilteredProducts)
	}, [activeCategory, products])

	return (
		<Container>
			<ContainerHeader>
				<ImgProducts src={logoHome} />
			</ContainerHeader>
			<CategoryMenu>
				{categories &&
					categories.map((category) => (
						<CategoryButton
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							style={{
								color: category.id === activeCategory ? '#fa8b0d' : '',
								borderBottom: category.id === activeCategory ? '3px solid #fa8b0d' : '',
							}}
						>
							{category.name}
						</CategoryButton>
					))}
			</CategoryMenu>
			<ProductContainer>
				{filteredProducts.map((product) => (
					<CardProducts key={product.id} product={product} />
				))}
			</ProductContainer>
		</Container>
	)
}
