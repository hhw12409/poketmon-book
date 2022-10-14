import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyPokemon from './pages/MyPokemon'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myPokemon" element={<MyPokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
