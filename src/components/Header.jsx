import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="main-header fixed top-0 left-0 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
