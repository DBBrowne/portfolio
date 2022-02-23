import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from './components/Intro'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <section>
        <Routes>
          <Route exact path="/" element={<Intro />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
