import { Link } from 'react-router-dom'

const NavButton = () => {
	return (
		<button className='flex flex-col place-content-around hover:bg-zinc-300 p-3 w-12 h-12 transition-all rounded-full cursor-pointer md:hidden'>
			<span className='block h-0.5 w-full bg-zinc-700 rounded transition'></span>
			<span className='block h-0.5 w-full bg-zinc-700 rounded transition'></span>
			<span className='block h-0.5 w-full bg-zinc-700 rounded transition'></span>
		</button>
	)
}

const NavMenu = ({ children }) => {
	return (
		<ul className='flex flex-col gap-2 md:flex-row md:items-center'>
			{children}
		</ul>
	)
}

const NavItem = ({ to, text }) => {
	return (
		<li>
			<Link
				to={to}
				className='button button-outline-success md:btn-outline-primary w-full text-left'
			>
				{text}
			</Link>
		</li>
	)
}

const Nav = () => {
	return (
		<nav>
			<NavButton />
			<div className='fixed top-14 inset-0 p-4 w-3/5 sm:w-1/2 bg-white shadow-sm md:shadow-none md:w-auto md:static md:p-0 -translate-x-full md:translate-x-0 transition'>
				<NavMenu>
					<NavItem to='#' text='Link' />
				</NavMenu>
			</div>
		</nav>
	)
}

export default Nav
