import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import AOS from "aos";
import "aos/dist/aos.css";


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

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Work />
      <Projects />
      <Contact />
      {showButton && (
        <button className="fixed bottom-0 right-0 p-3 rounded-full bg-[#001b5e] hover:bg-green-400 text-white hover:text-[#001b5e] text-3xl" onClick={handleClick}>
          <BsArrowUpCircleFill />
        </button>
      )}
    </div>
  )
}

export default App