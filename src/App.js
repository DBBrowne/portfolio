import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from './components/Intro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
