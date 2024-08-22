import HomeIcon from '@mui/icons-material/Home'
import InventoryIcon from '@mui/icons-material/Inventory'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import StoreIcon from '@mui/icons-material/Store'

const MenuList = [
	{
		id: 0,
		path: '/',
		icon: HomeIcon,
	},
	{
		id: 1,
		path: '/pedidos',
		icon: ShoppingBagIcon,
	},
	{
		id: 2,
		path: '/listar-produtos',
		icon: StoreIcon,
	},
	{
		id: 3,
		label: '+',
		path: '/novo-produto',
		icon: InventoryIcon,
	},
]

export default MenuList
