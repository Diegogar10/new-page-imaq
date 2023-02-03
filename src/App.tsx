import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Contacto from "./pages/Contacto"
import Equipos from "./pages/Equipos"
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Sesion from "./pages/Sesion"
function App() {
  
  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/equipos-y-productos" element={<Equipos/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/cuenta" element={<Sesion/>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App
