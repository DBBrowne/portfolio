import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './containers/About'
import Nav from './containers/common/Nav'
import Footer from './containers/common/Footer'
import Projects from './containers/Projects'


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
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
