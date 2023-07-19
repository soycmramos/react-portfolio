import { Link } from 'react-router-dom'
import { HiCode } from "react-icons/hi";

const Logo = () => {
	return (
		<Link to='/'>
			{/* <h1 className='text-3xl font-semibold text-zinc-600'>Lorem</h1> */}
			<HiCode className='w-8 h-8' />
		</Link>
	)
}

export default Logo
