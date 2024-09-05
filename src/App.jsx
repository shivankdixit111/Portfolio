import Navbar from './components/Navbar'  
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'
import Skills from './components/Skills/Skills.jsx'

function App() { 

  return (
    <> 
       <div className=' bg-[#171d32] h-auto w-full overflow-hidden'>
          <Navbar/>
          <h1>Hello</h1>
          <Home/>
          <Projects/>
          <Skills/>
          <About/>
          <Footer/>
       </div>
    </>
  )
}

export default App
