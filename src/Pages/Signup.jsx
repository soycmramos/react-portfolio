import { useState } from "react"

const Signup = () => {

	const [name, setName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleInputName = e => setName(e.target.value)
	const handleInputLastName = e => setLastName(e.target.value)
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
			body: JSON.stringify({ name, lastName, email, password })
		}

		try {
			const response = await fetch('http://localhost:5000/v1/auth/signup', options)
			console.log({ response })
			const data = await response.json()
			console.log({ data })
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<section className="flex flex-col flex-grow justify-center py-8">
			<div className="container mx-auto px-4">
				<form className="md:w-1/2 xl:w-1/3 mx-auto shadow-lg px-6 py-10 bg-white rounded-lg" onSubmit={handleSubmit}>
					<h2 className="text-4xl text-center font-medium mb-6 text-zinc-600">Sign up</h2>
					<div className="flex flex-col gap-2">
						<input
							type="text"
							autoComplete="off"
							placeholder="Name"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
							onChange={handleInputName}
						/>
						<input
							type="text"
							autoComplete="off"
							placeholder="Last name"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
							onChange={handleInputLastName}
						/>
						<input
							type="email"
							autoComplete="off"
							placeholder="Email"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
							onChange={handleInputEmail}
						/>
						<input
							type="password"
							autoComplete="off"
							placeholder="Password"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
							onChange={handleInputPassword}
						/>
						<button className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Signup
