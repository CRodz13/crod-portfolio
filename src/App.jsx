import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App