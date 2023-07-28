import Container from './../components/Container'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import Button from './../components/Button'

const Landing = () => {
	return (
		<>
			{/* <section className='h-screen grid place-items-center bg-white'>
				<Container>
					<div className='flex flex-col md:flex-row md:items-center gap-8'>
						<div className='flex flex-col md:w-1/2 gap-6'>
							<div>
								<h1 className='text-zinc-600 font-bold text-6xl lg:text-7xl mb-2'>
									Hello!
									<p className='text-zinc-600 text-4xl lg:text-5xl font-normal'>I'm Carlos Ramos</p>
								</h1>
								<p className={`text-zinc-500 text-lg md:text-xl font-['Victor_Mono']`}>SOA & JavaScript developer</p>
							</div>
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
								<Button to='/cv' text='Download CV' className='button-info flex items-center gap-1 font-semibold'>
									<BsDownload className='w-5 h-5 font-semibold' />
								</Button>
							</div>
						</div>
						<figure className='w-full mx-auto sm:w-3/4 md:w-1/2'>
							<img
								src='/src/assets/undraw_developer_activity_re_39tg.svg'
								className='mx-auto md:mr-0'
							/>
						</figure>
					</div>
				</Container>
			</section> */}
			<section className='mt-14 bg-white'>
				<Container>
					<div className="">
						<h2 className='text-4xl mb-4 text-zinc-600'>Skills</h2>
						<div className="flex flex-col-md:flex-row">
							<article>
								<figure>
									<img src="/src/assets/icon-mysql.svg" alt="icon-mysql" />
									<img src="/src/assets/icon-nodejs.svg" alt="icon-nodejs" />
									<img src="/src/assets/icon-reactjs.svg" alt="icon-reactsjs" />
								</figure>
							</article>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}

export default Landing
