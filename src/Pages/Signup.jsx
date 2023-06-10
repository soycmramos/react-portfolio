import { useState } from 'react'

const Signup = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleInputEmail = e => setEmail(e.target.value)
	const handleInputPassword = e => setPassword(e.target.value)

	const handleSubmit = async e => {
		e.preventDefault()

		console.log({ email, password })
		return

		// const options = {
		// 	method: 'PUT',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json',
		// 	},
		// 	body: JSON.stringify({ email, password })
		// }

		// try {
		// 	const response = await fetch('http://localhost:5000/v1/auth/signup', options)
		// 	const data = await response.json()
		// 	console.log({ data })
		// } catch (error) {
		// 	console.error(error)
		// }
	}

	return (
		<section className='flex flex-col flex-grow justify-center py-8'>
			<div className='container mx-auto px-4'>
				<form className='flex flex-col gap-2 md:w-1/2 xl:w-1/2 p-8 mx-auto shadow-lg bg-white rounded-lg' onSubmit={handleSubmit}>
					<h2 className='text-4xl text-center font-medium mb-6 text-zinc-600'>Sign up</h2>
					<input
						type='email'
						name='email'
						autoComplete='off'
						placeholder='Email'
						className='p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent'
						onChange={handleInputEmail}
					/>
					<input
						type='password'
						name='password'
						autoComplete='off'
						placeholder='Password'
						className='p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent'
						onChange={handleInputPassword}
					/>
					<button className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</section>
	)
}

export default Signup
