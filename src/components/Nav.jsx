const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="hamburger" className="peer" hidden />
      <label htmlFor="hamburger" className="flex flex-col place-content-around hover:bg-gray-300 p-2 w-10 h-10 transition rounded cursor-pointer md:hidden">
        <span className="block h-0.5 w-full bg-gray-700 rounded peer-checked:bg-yellow-500 transition"></span>
        <span className="block h-0.5 w-full bg-gray-700 rounded transition"></span>
        <span className="block h-0.5 w-full bg-gray-700 rounded transition"></span>
      </label>

      <div className="fixed top-14 inset-0 p-4 w-3/5 sm:w-1/2 bg-white shadow-sm md:shadow-none md:w-auto md:static md:p-0 -translate-x-full md:translate-x-0 transition">
        <ul className="flex flex-col gap-2 md:flex-row">
          <li><a href="#" className="block w-full py-2 px-4 rounded hover:bg-gray-200 font-semibold">Item 1</a></li>
          <li><a href="#" className="block w-full py-2 px-4 rounded hover:bg-gray-200 font-semibold">Item 2</a></li>
          <li><a href="#" className="block w-full py-2 px-4 rounded hover:bg-gray-200 font-semibold">Item 3</a></li>
          <li><a href="#" className="block w-full py-2 px-4 rounded hover:bg-gray-200 font-semibold">Item 4</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav