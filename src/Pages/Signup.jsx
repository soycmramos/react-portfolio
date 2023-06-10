import Loader from './../components/Loader';
import SignupFrom from './../components/SignupForm';

const Signup = () => {

	return (
		<section className='flex flex-col flex-grow justify-center py-8'>
			<div className='container mx-auto px-4'>
				<SignupFrom />
			</div>
		</section>
	)
}

export default Signup
