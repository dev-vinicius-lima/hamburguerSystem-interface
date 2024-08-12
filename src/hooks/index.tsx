import React from 'react'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

interface AppProviderProps {
	children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<UserProvider>
			<CartProvider>{children}</CartProvider>
		</UserProvider>
	)
}
