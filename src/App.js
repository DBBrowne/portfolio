import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from './components/Intro'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className='body-container'>
        <section>
          <Routes>
            <Route exact path="/" element={<Intro />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
