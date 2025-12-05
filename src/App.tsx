import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './shared/Nav/Nav'


function App() {

  return (
    <>
     <header>
      <Nav />
     </header>
     <main>
      {/* hero section */}
      <Hero />
     </main>
    </>
  )
}

export default App
