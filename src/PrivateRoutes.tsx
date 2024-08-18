import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from './components'
import { Paths } from './Constants/Paths'

const PrivateRoutes = ({ children, isAdmin }: { children: React.ReactNode; isAdmin?: boolean }) => {
	const token = localStorage.getItem('bigFomee: userData')
	if (!token) {
		return <Navigate to={Paths.login} replace />
	}
	if (isAdmin && !JSON.parse(token).admin) {
		return <Navigate to={Paths.home} replace />
	}
	return (
		<>
			{!isAdmin && <Header />}
			{children}
		</>
	)
}

export default PrivateRoutes
