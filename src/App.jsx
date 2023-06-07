import Header from './components/Header'
import Hero from './components/Hero'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<Header />
			<Layout>
				<Hero />
				{/* <section className='py-28 bg-white'>
					<div className="container mx-auto px-4 flex place-content-center">
						<article>
							<h2 className='text-center text-4xl text-zinc-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis</h2>
						</article>
					</div>
				</section> */}
				{/* <section className='py-8 bg-zinc-100'>
					<div className="container mx-auto px-4">
						<article className='grid grid-flow-col grid-cols-4'>
							<img src="http://via.placeholder.com/640x360" className="col-span-1 rounded-lg" />
							<img src="http://via.placeholder.com/640x360" className="col-span-1 rounded-lg" />
							<img src="http://via.placeholder.com/640x360" className="col-span-1 rounded-lg" />
							<img src="http://via.placeholder.com/640x360" className="col-span-1 rounded-lg" />
						</article>
					</div>
				</section> */}
			</Layout>
			<Footer />
		</>
	)
}

export default App
