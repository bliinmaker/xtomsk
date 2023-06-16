import { Outlet } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import Excursion from '../pages/Excursion'
import Home from '../pages/Home'
import { PageNotFound } from '../pages/PageNotFound'

export const appRoutes = [
	{
		path: '/',
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				path: '*',
				element: <PageNotFound />,
			},
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/excursions/:excursionId',
				element: <Excursion />,
			},
		],
	},
]
