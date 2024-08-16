import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
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

interface createDataProps {
	name: string
	_id: string
	createdAt: string
	status: string
	products: products[]
	user: UserProps
}

function Row(props: { row: createDataProps }) {
	const { row } = props
	const [open, setOpen] = useState(false)

	return (
		<Container>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row._id}
				</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell>{row.createdAt}</TableCell>
				<TableCell>{row.status}</TableCell>
				<TableCell>{row.products.length}</TableCell>
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
										<TableRow key={productRow.id}>
											<TableCell component="th" scope="row">
												{productRow.quantity}
											</TableCell>
											<TableCell>{productRow.name}</TableCell>
											<TableCell>{productRow.category}</TableCell>
											<TableCell>
												<img src={productRow.url} alt={productRow.name} />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</Container>
	)
}

export default Row
