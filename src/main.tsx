import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from '../public/styles/globalStyles.ts'
import NotFound from './containers/error/error-page.tsx'
import Index from './containers/Home/Index.tsx'
import Login from './containers/Login/index.tsx'
import Register from './containers/register/index.tsx'
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
