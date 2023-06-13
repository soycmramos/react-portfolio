import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<section className="flex flex-col flex-grow py-8 justify-center">
			<div className="container mx-auto px-4">
				<article className="flex flex-col md:flex-row-reverse items-center gap-8">
					<img
						src="http://via.placeholder.com/640x360"
						alt="Hero img"
						className="md:w-1/2 rounded-lg "
					/>
					<div className="md:w-1/2 flex flex-col gap-4 md:gap-6">
						<h2 className="text-zinc-600 font-bold text-3xl lg:text-5xl">Lorem ipsum dolor sit</h2>
						<p className="text-zinc-600">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos odit blanditiis. Placeat iste commodi eaque quibusdam similique saepe, voluptatibus delectus, autem provident iusto magni.
						</p>
						<Link to="/signup" className="btn btn-primary self-start">Button</Link>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Home
