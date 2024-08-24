import { createContext, useContext, useEffect, useState } from 'react'

interface CartContextProps {
	putProductsInCart: (product: Product) => void
	cartProducts: Product[]
	increaseProductsQuantity: (productId: Product) => void
	decreaseProductsQuantity: (productId: Product) => void
	quantityCartProducts: number
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
	const [cartProducts, setCartProdutcs] = useState<Product[]>([])
	const [quantityCartProducts, setQuantityCartProducts] = useState<number>(0)

	const updateLocalStorage = async (product: Product[]) => {
		await localStorage.setItem('bigFomee: CartInfo', JSON.stringify(product))
	}

	const deleteProductInCart = async (productId: Product) => {
		const newCart = cartProducts.filter((product) => product.id !== productId.id)
		setCartProdutcs(newCart)
		updateLocalStorage(newCart)
	}

	const putProductsInCart = async (product: Product) => {
		const cartIndex = cartProducts.findIndex((pdt) => pdt.id === product.id)

		let newCartProducts = []
		if (cartIndex >= 0) {
			newCartProducts = cartProducts
			const quantityCartProducts = cartProducts.length
			newCartProducts[cartIndex].quantity += 1
			setCartProdutcs(newCartProducts)
			setQuantityCartProducts(quantityCartProducts)
		} else {
			product.quantity = 1
			newCartProducts = [...cartProducts, product]
			setCartProdutcs(newCartProducts)
		}

		updateLocalStorage(newCartProducts)
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

	const increaseProductsQuantity = async (productId: Product) => {
		const newCart = cartProducts.map((product) => {
			return product.id === productId.id ? { ...product, quantity: product.quantity + 1 } : product
		})
		setCartProdutcs(newCart)
		const clientCartData = await localStorage.getItem('bigFomee: CartInfo')
		if (clientCartData) {
			setCartProdutcs(newCart)
			await localStorage.setItem('bigFomee: CartInfo', JSON.stringify(newCart))
		}
	}

	const decreaseProductsQuantity = async (productId: Product) => {
		const cartIndex = cartProducts.findIndex((pdt) => pdt.id === productId.id)

		if (cartProducts[cartIndex].quantity > 1) {
			const newCart = cartProducts.map((product) => {
				return product.id === productId.id ? { ...product, quantity: product.quantity - 1 } : product
			})

			setCartProdutcs(newCart)
			const clientCartData = await localStorage.getItem('bigFomee: CartInfo')
			if (clientCartData) {
				setCartProdutcs(newCart)
			}
		} else {
			deleteProductInCart(productId)
		}
	}

	return (
		<CartContext.Provider
			value={{
				putProductsInCart,
				cartProducts,
				increaseProductsQuantity,
				decreaseProductsQuantity,
				quantityCartProducts,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within an UserProvider')
	}

	return context
}
