const Nav = () => {

	return (
		<nav>
			<input type="checkbox" id="hamburger" className="peer" hidden />
			<label htmlFor="hamburger" className="flex flex-col place-content-around hover:bg-zinc-300 p-2 w-10 h-10 transition rounded cursor-pointer md:hidden">
				<span className="block h-0.5 w-full bg-zinc-700 rounded transition"></span>
				<span className="block h-0.5 w-full bg-zinc-700 rounded transition"></span>
				<span className="block h-0.5 w-full bg-zinc-700 rounded transition"></span>
			</label>

			<div className="fixed top-14 inset-0 p-4 w-3/5 sm:w-1/2 bg-white shadow-sm md:shadow-none md:w-auto md:static md:p-0  transition">
				<ul className="flex flex-col gap-2 md:flex-row md:items-center">
					{/* <li><a href="#" className="block w-full py-2 px-4 rounded hover:bg-zinc-100 font-semibold transition">Item 1</a></li> */}
					{/* <li><a href="#" className="btn btn-default-primary">Sign Up</a></li> */}
					<li><a href="#" className="btn btn-outline-primary w-full text-left">Button</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
