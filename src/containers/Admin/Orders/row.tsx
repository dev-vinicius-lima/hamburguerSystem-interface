import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { toast } from 'react-toastify'

import apiBigFomee from '../../../services/api'
import OrderStatus from './Order-status'
import { ProdutcsImg, SelectStyled } from './styles'

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

interface createDataProps {
	name: string
	_id: string
	createdAt: string
	status: string
	products: products[]
	user: UserProps
}

interface OrderProps {
	name: string
	_id: string
	createdAt: string
	status: string
	products: products[]
	user: UserProps
}

function Row(props: {
	row: createDataProps
	orders: OrderProps[]
	setOrders: React.Dispatch<React.SetStateAction<OrderProps[]>>
}) {
	const { row } = props
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	async function setNewStatus(
		id: string,
		status: string,
		orders: OrderProps[],
		setOrders: React.Dispatch<React.SetStateAction<OrderProps[]>>,
	) {
		setLoading(true)
		try {
			await apiBigFomee.put(`orders/${id}`, { status })
			const newOrders = orders.map((order) => {
				return order._id === id ? { ...order, status } : order
			})
			setOrders(newOrders)
		} catch (error) {
			toast.error('Erro ao alterar status do pedido', {
				theme: 'light',
			})
			console.log(error)
		} finally {
			setLoading(false)
			if (apiBigFomee !== undefined) {
				toast.success('Status alterado com sucesso!', {
					theme: 'light',
				})
			}
		}
	}
	return (
		<>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="medium"
						onClick={() => setOpen(!open)}
						color="default"
						style={{ color: '#000' }}
					>
						{open ? <MdKeyboardArrowUp /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				{window.innerWidth > 768 && <TableCell>{row._id}</TableCell>}
				<TableCell>{row.name}</TableCell>
				<TableCell>{row.createdAt}</TableCell>
				<TableCell>
					<SelectStyled
						options={OrderStatus.filter((status) => status.value !== 'Todos')}
						menuPortalTarget={document.body}
						placeholder="Selecione um status"
						styles={{ input: (base) => ({ ...base, color: '#000', backgroundColor: 'transparent' }) }}
						defaultValue={OrderStatus.find((status) => status.value === row.status || null)}
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						onChange={(newStatus) => setNewStatus(row._id, (newStatus as any).value, props.orders, props.setOrders)}
						isLoading={loading}
					/>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								Pedido
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Quantidade</TableCell>
										<TableCell>Produto</TableCell>
										<TableCell>Categoria</TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.products.map((productRow) => (
										<TableRow key={productRow.url}>
											<TableCell>{productRow.quantity}</TableCell>
											<TableCell>{productRow.name}</TableCell>
											<TableCell>{productRow.category}</TableCell>
											<TableCell>
												<ProdutcsImg src={productRow.url} alt={productRow.name} />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	)
}

export default Row
