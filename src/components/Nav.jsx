import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import Button from './Button'

const NavButton = () => {
	return (
		<Button className='border-none hover:bg-zinc-300 transition-all cursor-pointer p-2 rounded-full md:hidden'>
			<HiMenu className='h-8 w-8' />
		</Button>
	)
}

const NavMenu = ({ children }) => {
	return (
		<ul className='flex flex-col md:flex-row md:gap-8'>
			{children}
		</ul>
	)
}

const NavItem = ({ to, text, className }) => {
	return (
		<li>
			<Link
				to={to}
				// className='button button-outline-success md:btn-outline-primary w-full text-left'
				className={`hover:bg-blue-600 block py-4 text-center text-zinc-600 hover:text-white transition md:py-0 md:hover:bg-transparent hover:text-zinc-500${className ? ' ' + className : ''}`}
			>
				{text}
			</Link>
		</li>
	)
}

const Nav = () => {
	return (
		<nav className='flex items-center'>
			<NavButton />
			<div className='fixed top-14 inset-0 w-full sm:w-3/5 bg-zinc-100 md:bg-transparent shadow md:shadow-none md:w-auto md:static md:translate-x-0 transition'>
				<NavMenu>
					<NavItem to='/' text='Home' />
					<NavItem to='/' text='Contact' />
				</NavMenu>
			</div>
		</nav>
	)
}

export default Nav
