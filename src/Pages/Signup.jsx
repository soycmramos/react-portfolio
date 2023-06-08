const Signup = () => {
	return (
		<section className="py-8">
			<div className="container mx-auto px-4">
				<form className="md:w-1/2 xl:w-1/3 mx-auto shadow-lg px-6 py-10 bg-white rounded-lg">
					<h2 className="text-4xl text-center font-medium mb-6 text-zinc-600">Sign up</h2>
					<div className="flex flex-col gap-2">
						<input
							type="text"
							autoComplete="off"
							placeholder="Name"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
						// value={'Ramos'}
						/>
						<input
							type="text"
							autoComplete="off"
							placeholder="Last name"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
						// value={'Carlos'}
						/>
						<input
							type="email"
							autoComplete="off"
							placeholder="Email"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
						// value={'carlosmarioramos34@gmail.com'}
						/>
						<input
							type="password"
							autoComplete="off"
							placeholder="Password"
							className="p-2 outline-none border w-full text-zinc-600 text-lg bg-transparent"
						// value={'@Cr43188'}
						/>
						{/* <Link className="self-end underline text-zinc-600" to='#'>Forgot your password?</Link> */}
						<button className="btn btn-primary">
							Submit
						</button>
						{/* </div> */}
					</div>
				</form>
			</div>
		</section>
	)
}

export default Signup
