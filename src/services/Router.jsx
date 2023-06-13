import { Routes, Route } from 'react-router-dom'

import Layout from '../components/layouts/Layout'

import Landing from '../pages/Landing'
import Test from '../Pages/Test'

const Router = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</Layout>
	)
}

export default Router
