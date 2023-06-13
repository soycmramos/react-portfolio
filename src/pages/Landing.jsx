import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<section className="flex flex-col flex-grow py-8 md:justify-center">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<article className="md:w-1/2 flex flex-col gap-4 md:gap-6 text-center md:text-start">
						<div>
							<h1 className="text-zinc-600 font-bold text-6xl lg:text-8xl">
								Hello!
								<span className="block text-zinc-600 text-4xl font-normal lg:text-6xl">I'm Carlos Ramos</span>
							</h1>
							<span className="text-zinc-500 text-lg md:text-xl">SOA & Javascript Developer</span>
						</div>
						<div className='flex gap-4'>
							<Link to="/contact" className="btn btn-primary self-center md:self-start">Contact</Link>
							<Link to="/resume" className="btn btn-outline-primary self-center md:self-start">Resume</Link>
						</div>
					</article>
					<img
						src="http://via.placeholder.com/640x360"
						alt="Hero img"
						className="md:w-1/2 rounded-lg "
					/>
				</div>
			</div>
		</section>
	)
}

export default Landing
