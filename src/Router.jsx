import { Routes, Route } from 'react-router-dom'

import MainLayout from './components/Layouts/MainLayout'
import Home from './Pages/Home'
import Signup from './Pages/Signup'

const AppRouter = () => {
	return (

		<MainLayout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</MainLayout>

	)
}

export default AppRouter
