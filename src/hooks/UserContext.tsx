import { createContext, useContext } from 'react'

const UserContext = createContext({})
interface UserProviderProps {
	children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const user = { name: 'Pedro', age: 22 }
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUser must be used within an UserProvider')
	}

	return context
}
