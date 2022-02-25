import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className='body-container'>
        <section>
          <Routes>
            <Route exact path="/" element={<About />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
