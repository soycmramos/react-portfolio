import Container from './../components/Container'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import Button from './../components/Button'

const Landing = () => {
	return (
		<>
			<section className='flex py-8 md:py-0 h-screen items-center bg-white'>
				<Container>
					<div className='flex flex-col md:flex-row md:items-center gap-8'>
						<div className='flex flex-col md:w-1/2 gap-6'>
							<article>
								<h1 className='text-zinc-600 font-bold text-6xl lg:text-7xl xl:text-8xl mb-2'>
									Hello!
									<span className='block text-zinc-600 text-4xl lg:text-5xl xl:text-6xl font-normal'>I'm Carlos Ramos</span>
								</h1>
								<p className={`text-zinc-500 text-lg md:text-xl font-['Victor_Mono']`}>SOA & JavaScript Developer</p>
							</article>
							<div className='flex justify-between w-full gap-8'>
								<ul className='flex gap-4 items-center'>
									<Link to='/' className='hover:scale-110 transition'>
										<FaLinkedin className='w-7 h-7 text-zinc-700' />
									</Link>
									<Link to='/' className='hover:scale-110 transition'>
										<FaGithub className='w-7 h-7 text-zinc-700' />
									</Link>
									<Link to='/' className='hover:scale-110 transition'>
										<FaInstagram className='w-7 h-7 text-zinc-700' />
									</Link>
								</ul>
								<Button to='/cv' text='Download CV' className='button-info flex items-center gap-2 font-semibold'>
									<BsDownload className='w-5 h-5 font-bold' />
								</Button>
							</div>
						</div>
						<img
							// src='http://via.placeholder.com/640x360'
							src='/src/assets/undraw_programming_re_kg9v.svg'
							className='w-2/3 sm:w-1/2 mx-auto'
						/>
					</div>
				</Container>
			</section>
		</>
	)
}

export default Landing
