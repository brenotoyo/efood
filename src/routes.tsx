import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Pefil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/perfil" element={<Perfil />}></Route>
  </Routes>
)

export default Rotas
