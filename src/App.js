import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Projects from './components/Projects'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className='body-container'>
        <section>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
