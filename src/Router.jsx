import { Routes, Route } from 'react-router-dom'

import Layout from './components/layouts/Layout'

import Landing from './Pages/Home'
import Test from './Pages/Test'

const AppRouter = () => {
	return (

		<Layout>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</Layout>

	)
}

export default AppRouter
