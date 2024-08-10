import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from '../public/styles/globalStyles.ts'
import { NotFound, Login, Register, Index, Products } from './containers'
import { UserProvider } from './hooks/UserContext.tsx'
import PrivateRoutes from './PrivateRoutes.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<PrivateRoutes>
				<Index />
			</PrivateRoutes>
		),
		errorElement: <NotFound />,
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <NotFound />,
	},
	{
		path: '/cadastro',
		element: <Register />,
	},
	{
		path: '/produtos',
		element: <Products />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
		<GlobalStyles />
		<ToastContainer />
	</React.StrictMode>,
)
