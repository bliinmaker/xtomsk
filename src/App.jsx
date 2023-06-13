import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes/routes.jsx'

export const router = createBrowserRouter(appRoutes)

export const App = () => <RouterProvider router={router} />
