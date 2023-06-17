const Button = ({ type = 'button', text, onclick, className, ...res }) => {
	return (
		<button
			type={type}
			onClick={onclick}
			className={`button${className ? ' ' + className : ''}`} {...res}
		>
			{text}
		</button>
	)
}

export default Button
