import Container from './Container'
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
	return (
		<header className="main-header fixed inset-0 w-full bg-white shadow">
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
