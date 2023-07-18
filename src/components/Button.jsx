const Button = ({ children, type = 'button', text, onClick, className, ...res }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`button${className ? ' ' + className : ''}`}
			{...res}
		>
			{text}
			{children}
		</button>
	)
}

export default Button
