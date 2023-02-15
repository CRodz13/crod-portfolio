import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import About from './pages/About'
import Tools from './pages/Tools'
import Contact from './pages/Contact'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Work from './pages/Work'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import 'animate.css';

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <BrowserRouter basename="/crod-portfolio">
      <SideBar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  )
}

export default App