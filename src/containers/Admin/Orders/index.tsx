import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'

import apiBigFomee from '../../../services/api'
import formatDate from '../../../utils/formatDate'
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
		return {
			name: order.user.name || 'Usuário não informado',
			_id: order._id,
			createdAt: formatDate(order.createdAt),
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
			<TableContainer component={Paper} id="Container">
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell align="left">Pedido</TableCell>
							<TableCell align="left">Cliente</TableCell>
							<TableCell align="left">Data</TableCell>
							<TableCell align="left">Status</TableCell>
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
