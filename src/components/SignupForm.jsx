import { useState } from 'react'

const SignupFrom = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleInputEmail = e => setEmail(e.target.value)
	const handleInputPassword = e => setPassword(e.target.value)

	const handleSubmit = async e => {
		e.preventDefault()

		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({ email, password })
		}

		try {
			setLoading(true)
			const response = await fetch('http://localhost:5000/v1/auth/signup', options)
			const data = await response.json()
			console.log({ data })
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form className='flex flex-col md:w-1/2 xl:w-1/3 px-6 py-10 mx-auto shadow-lg bg-white rounded-lg' onSubmit={handleSubmit}>
			<h2 className='text-3xl text-center text-zinc-600 mb-6'>Signup</h2>
			<div className="flex flex-col gap-4">
				<fieldset>
					<legend className='text-sm text-zinc-400'>Email</legend>
					<input
						type='email'
						name='email'
						autoComplete='off'
						placeholder='Enter email addres'
						className='p-2 outline-none border w-full text-zinc-600 bg-gray-100'
						onChange={handleInputEmail}
					/>
				</fieldset>
				<fieldset>
					<legend className='text-sm text-zinc-400'>Password</legend>
					<input
						type='password'
						name='password'
						autoComplete='off'
						placeholder='Enter your password'
						className='p-2 outline-none border w-full text-zinc-600 bg-gray-100'
						onChange={handleInputPassword}
					/>
				</fieldset>
				<button className='btn btn-primary'>
					Submit
				</button>
			</div>
		</form>
	)
}

export default SignupFrom
