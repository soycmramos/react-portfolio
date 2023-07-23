import { Link } from 'react-router-dom'
import { HiMenu, HiOutlineSun } from 'react-icons/hi'
import Button from './Button'

const NavButton = () => {
	return (
		<Button className='p-0 border-none sm:hidden'>
			<HiMenu className='h-10 w-10 p-1.5 hover:bg-slate-200 transition rounded-full' />
		</Button>
	)
}

const ThemeButton = () => {
	return (
		<Button className='p-0 border-none'>
			<HiOutlineSun className='h-10 w-10 p-1.5 cursor-pointer hover:bg-slate-200 transition rounded-full' />
		</Button>
	)
}

const Nav = () => {
	return (
		<nav className='flex items-center sm:flex-row-reverse sm:gap-4'>
			<ThemeButton />
			<NavButton />
			<div className='fixed top-14 inset-0 bg-zinc-50 sm:bg-transparent sm:static'>
				<ul className='flex flex-col items-center gap-4 py-6 sm:flex-row sm:py-0'>
					<li className='py-4 sm:py-0'>
						<Link to='/' className='block font-semibold text-lg sm:text-base text-zinc-700 hover:text-blue-500 transition'>Inicio</Link>
					</li>
					<li className='py-4 sm:py-0'>
						<Link to='/contact' className='block font-semibold text-lg sm:text-base text-zinc-700 hover:text-blue-500 transition'>Contacto</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
