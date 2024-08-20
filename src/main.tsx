import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from '../public/styles/globalStyles.ts'
import { Paths } from './Constants/Paths.ts'
import { NotFound, Login, Register, Index, Products, Cart, Admin } from './containers'
import EditProduct from './containers/Admin/EditProduct/index.tsx'
import { AppProvider } from './hooks'
import PrivateRoutes from './PrivateRoutes.tsx'

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: (
			<PrivateRoutes>
				<Index />
			</PrivateRoutes>
		),
		errorElement: <NotFound />,
	},
	{
		path: Paths.login,
		element: <Login />,
		errorElement: <NotFound />,
	},
	{
		path: Paths.register,
		element: <Register />,
	},
	{
		path: Paths.products,
		element: (
			<PrivateRoutes>
				<Products />,
			</PrivateRoutes>
		),
	},
	{
		path: Paths.cart,
		element: (
			<PrivateRoutes>
				<Cart />
			</PrivateRoutes>
		),
	},
	{
		path: Paths.orders,
		element: (
			<PrivateRoutes isAdmin>
				<Admin />
			</PrivateRoutes>
		),
	},
	{
		path: Paths.listProduct,
		element: (
			<PrivateRoutes isAdmin>
				<Admin />
			</PrivateRoutes>
		),
	},
	{
		path: Paths.newProduct,
		element: (
			<PrivateRoutes isAdmin>
				<Admin />
			</PrivateRoutes>
		),
	},
	{
		path: Paths.EditProducts,
		element: (
			<PrivateRoutes isAdmin>
				<EditProduct />
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
