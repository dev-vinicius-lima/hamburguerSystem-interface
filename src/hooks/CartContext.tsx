import { createContext, useContext, useEffect, useState } from 'react'

interface CartContextProps {
	putProductsInCart: (product: Product) => void
	cartProdutcs: Product[]
}

const CartContext = createContext<CartContextProps | undefined>(undefined)
interface CartProviderProps {
	children: React.ReactNode
}

interface Product {
	id: number
	name: string
	url: string
	offer: boolean
	price: number
	formatedPrice: string
	quantity: number
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cartProdutcs, setCartProdutcs] = useState<Product[]>([])

	const putProductsInCart = async (product: Product) => {
		const cartIndex = cartProdutcs.findIndex((pdt) => pdt.id === product.id)
		let newCartProducts = []
		if (cartIndex >= 0) {
			newCartProducts = cartProdutcs
			newCartProducts[cartIndex].quantity += 1
			setCartProdutcs(newCartProducts)
		} else {
			product.quantity = 1
			newCartProducts = [...cartProdutcs, product]
			setCartProdutcs(newCartProducts)
		}
		await localStorage.setItem('bigFomee: CartInfo', JSON.stringify(newCartProducts))
	}

	useEffect(() => {
		const loadUserData = async () => {
			const clientCartData = await localStorage.getItem('bigFomee: CartInfo')
			if (clientCartData) {
				setCartProdutcs(JSON.parse(clientCartData))
			}
		}

		loadUserData()
	}, [])

	return <CartContext.Provider value={{ putProductsInCart, cartProdutcs }}>{children}</CartContext.Provider>
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within an UserProvider')
	}

	return context
}
