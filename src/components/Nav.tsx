import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/nosotros'>Nosotros</Link></li>
        <li><Link to='/equipos-y-productos'>Euipos y productos</Link></li>
        <li><Link to='/servicios'>Servicios</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
        <li><Link to='/cuenta'>Cuenta</Link></li>
      </ul>      
    </nav>
  )
}
export default Nav
