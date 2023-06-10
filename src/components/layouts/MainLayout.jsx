import Header from './../Header'
import Footer from './../Footer'

const MainLayout = ({ children }) => {

	return (
		<>
			<Header />
			<main className='flex flex-col flex-grow'>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default MainLayout
