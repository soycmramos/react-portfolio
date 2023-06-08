const Button = ({ children, className, onClick, ...res }) => {

	console.log({ children })
	console.log({ res })

	return (
		<button
			className={`btn ${className}`}
			onClick={onClick}
			{...res}
		>
			{children}
		</button>
	)
}

export default Button
