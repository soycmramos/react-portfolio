import { BsMoonStars } from 'react-icons/bs'

const Nav = () => {
	return (
		<nav>
			<input type="checkbox" id="hamburger" className="peer" hidden />
			<label htmlFor="hamburger" className="flex flex-col place-content-around hover:bg-slate-300 p-2 w-10 h-10 transition rounded cursor-pointer md:hidden">
				<span className="block h-0.5 w-full bg-slate-700 rounded transition"></span>
				<span className="block h-0.5 w-full bg-slate-700 rounded transition"></span>
				<span className="block h-0.5 w-full bg-slate-700 rounded transition"></span>
			</label>

			<div className="fixed top-14 inset-0 p-4 w-3/5 sm:w-1/2 bg-white shadow-sm md:shadow-none md:w-auto md:static md:p-0 -translate-x-full md:translate-x-0 transition">
				<ul className="flex flex-col gap-2 md:flex-row item">
					<li><a href="#" className="block w-full h-full py-2 px-4 rounded hover:bg-slate-100 font-semibold transition">Item 1</a></li>
					<li><a href="#" className="block w-full h-full py-2 px-4 rounded hover:bg-slate-100 font-semibold transition">Item 2</a></li>
					<li><a href="#" className="block w-full h-full py-2 px-4 rounded hover:bg-slate-100 font-semibold transition">Item 3</a></li>
					<li><a href="#" className="block w-full h-full py-2 px-4 rounded hover:bg-slate-100 font-semibold transition">Item 4</a></li>
					<li>
						<button className='h-full p-3 hover:bg-slate-100 rounded-full transition cursor-pointer'>
							<BsMoonStars className='w-5 h-5' />
						</button>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
