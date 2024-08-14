import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from './components'

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
	const token = localStorage.getItem('bigFomee: userData')
	console.log(token)
	if (!token) {
		return <Navigate to="/login" replace />
	}
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default PrivateRoutes
