import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Japonesa from './pages/Japonesa'
import Italiana from './pages/Italiana'
import Nordestina from './pages/Nordestina'
import Mineira from './pages/Mineira'
import Hamburgue from './pages/Hamburgueria'
import Pizzas from './pages/Doces'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/japonesa" element={<Japonesa />} />
    <Route path="/italiana" element={<Italiana />} />
    <Route path="/nordestina" element={<Nordestina />} />
    <Route path="/mineira" element={<Mineira />} />
    <Route path="/pizzaria" element={<Pizzas />} />
    <Route path="/hamburgueria" element={<Hamburgue />} />
  </Routes>
)

export default Rotas
