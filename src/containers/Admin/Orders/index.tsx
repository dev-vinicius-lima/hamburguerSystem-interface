import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'

import apiBigFomee from '../../../services/api'
import Row from './row'
import { Container } from './styles'

interface products {
	category: string
	id: number
	name: string
	price: number
	quantity: number
	url: string
	_id: string
}

interface UserProps {
	name: string
}

interface OrderProps {
	name: string
	_id: string
	createdAt: string
	status: string
	products: products[]
	user: UserProps
}

const Orders = () => {
	const [orders, setOrders] = useState([])
	const [rows, setRows] = useState<OrderProps[]>([])
	useEffect(() => {
		apiBigFomee
			?.get('orders')
			.then((response) => response.data)
			.then((data) => setOrders(data))
			.catch((error) => console.error('Failed to fetch orders', error))
	}, [])

	function createData(order: OrderProps) {
		console.log('order', order.user.name)
		return {
			name: order.user.name || 'Usuário não informado',
			_id: order._id,
			createdAt: order.createdAt,
			status: order.status,
			products: order.products,
			user: order.user,
		}
	}

	useEffect(() => {
		setRows(orders.map((order) => createData(order)))
	}, [orders])

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell>Pedido</TableCell>
							<TableCell>Cliente</TableCell>
							<TableCell>Data</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<Row key={row._id} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}

export default Orders
