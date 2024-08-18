import InventoryIcon from '@mui/icons-material/Inventory'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import StoreIcon from '@mui/icons-material/Store'

const MenuList = [
	{
		id: 1,
		label: 'Pedidos',
		path: '/pedidos',
		icon: ShoppingBagIcon,
	},
	{
		id: 2,
		label: 'Produtos',
		path: '/produtos',
		icon: StoreIcon,
	},
	{
		id: 3,
		label: 'Estoque',
		path: '/estoque',
		icon: InventoryIcon,
	},
]

export default MenuList
