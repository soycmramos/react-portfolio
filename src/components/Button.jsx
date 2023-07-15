const Button = ({ children, type = 'button', text, onclick, className, ...res }) => {
	return (
		<button
			type={type}
			onClick={onclick}
			className={`button${className ? ' ' + className : ''}`} {...res}
		>
			{text}
			{children}
		</button>
	)
}

export default Button
