import { Routes, Route } from 'react-router-dom'

import MainLayout from './components/Layouts/MainLayout'
import Home from './Pages/Home'

const AppRouter = () => {
	return (

		<MainLayout>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</MainLayout>

	)
}

export default AppRouter
