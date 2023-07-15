import Container from './Container'
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
	return (
		<header className="h-14 bg-white shadow">
			<Container>
				<div className="flex justify-between items-center h-full">
					<Logo />
					<Nav />
				</div>
			</Container>
		</header>
	)
}

export default Header
