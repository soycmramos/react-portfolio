const Container = ({ children, className }) => {
	return (
		<div className={`container mx-auto px-4 lg:w-4/5 lg:px-0${className ? ' ' + className : ''}`}>
			{children}
		</div>
	)
}

export default Container
