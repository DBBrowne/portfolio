import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './containers/About'
import Contact from './containers/Contact'
import Footer from './containers/common/Footer'
import Nav from './containers/common/Nav'
import Projects from './containers/Projects'
import Technologies from './containers/Technologies'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className='body-container'>
        <section>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
