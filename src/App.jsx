import Header from './components/Header'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <Header>
        <Logo />
        <Nav />
      </Header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  )
}

export default App