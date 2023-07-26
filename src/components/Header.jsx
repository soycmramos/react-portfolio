import Container from './Container'
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
	return (
		<header className="fixed top-0 w-full h-14 bg-white shadow">
			<Container>
				<div className="flex justify-between items-center h-14">
					<Logo />
					<Nav />
				</div>
			</Container>
		</header>
	)
}

export default Header
