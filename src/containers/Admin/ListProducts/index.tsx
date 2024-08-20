import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../../../Constants/Paths'
import apiBigFomee from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditIcons } from './styles'

interface ProductProps {
	id: number
	name: string
	url: string
	offer: boolean
	price: number
}

const ListProducts = () => {
	const navigation = useNavigate()
	const [products, setProducts] = useState<ProductProps[]>()
	useEffect(() => {
		apiBigFomee
			.get('products')
			.then((response) => response.data)
			.then((data) => setProducts(data))
			.catch((error) => console.error('Failed to fetch products', error))
	}, [])

	const isOffer = (product: ProductProps) => {
		if (product.offer) {
			return <LocalOfferIcon color="success" />
		} else {
			return <>Não está na promoção</>
		}
	}

	const editProduct = (product: ProductProps) => {
		navigation(Paths.EditProducts, { state: product })
	}

	products?.sort((a, b) => (a.offer === b.offer ? 0 : a.offer ? -1 : 1))

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Nome</TableCell>
							<TableCell align="center">Preço</TableCell>
							<TableCell align="center">Produto em oferta</TableCell>
							<TableCell align="center">Imagem do produto</TableCell>
							<TableCell align="center">Editar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products &&
							products.map((product) => (
								<TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell align="center">{product.name}</TableCell>
									<TableCell align="center">{formatCurrency(product.price)}</TableCell>
									<TableCell align="center">{isOffer(product)}</TableCell>
									<TableCell align="center">
										<Img src={product.url} alt={product.name} />
									</TableCell>
									<TableCell align="center">
										<EditIcons onClick={() => editProduct(product)} />
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}

export default ListProducts
