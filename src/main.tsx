import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from '../public/styles/globalStyles.ts'
import { NotFound, Login, Register, Index, Products, Cart, Admin } from './containers'
import { AppProvider } from './hooks'
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
		element: (
			<PrivateRoutes>
				<Products />,
			</PrivateRoutes>
		),
	},
	{
		path: '/carrinho',
		element: (
			<PrivateRoutes>
				<Cart />
			</PrivateRoutes>
		),
	},
	{
		path: '/pedidos',
		element: (
			<PrivateRoutes isAdmin>
				<Admin />
			</PrivateRoutes>
		),
	},
	{
		path: 'listar-produtos',
		element: (
			<PrivateRoutes isAdmin>
				<Admin />
			</PrivateRoutes>
		),
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
		<GlobalStyles />
		<ToastContainer />
	</React.StrictMode>,
)
