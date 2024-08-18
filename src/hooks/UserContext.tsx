import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})
interface UserProviderProps {
	children: React.ReactNode
}

interface putUserDataProps {
	putUserData: (data: string) => void
	logout: () => void
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [userData, setUserData] = useState({})

	const putUserData = async (userInfo: putUserDataProps) => {
		setUserData(userInfo)

		await localStorage.setItem('bigFomee: userData', JSON.stringify(userInfo))
	}

	const logout = () => {
		localStorage.removeItem('bigFomee: userData')
		setUserData({})
	}

	useEffect(() => {
		const loadUserData = async () => {
			const clientInfo = await localStorage.getItem('bigFomee: userData')
			if (clientInfo) {
				setUserData(JSON.parse(clientInfo))
			}
		}

		loadUserData()
	}, [])

	return <UserContext.Provider value={{ putUserData, userData, logout }}>{children}</UserContext.Provider>
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUser must be used within an UserProvider')
	}

	return context
}
