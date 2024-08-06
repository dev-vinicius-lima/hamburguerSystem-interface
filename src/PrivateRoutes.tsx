import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
	const token = localStorage.getItem('bigFomee: userData')
	console.log(token)
	if (!token) {
		return <Navigate to="/login" replace />
	}
	return <>{children}</>
}

export default PrivateRoutes
