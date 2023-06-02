import Header from './components/Header'
import Hero from './components/Hero'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
      </Layout>
      <Footer />
    </>
  )
}

export default App
