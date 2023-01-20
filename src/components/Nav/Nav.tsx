import React from 'react';
import { Link } from 'react-router-dom';
import useSizeScreen from '../../hooks/useSizeScreen';
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';
import logo from '../../assets/LogoImaq.png';
import './Nav.scss'

const Nav = () => {

  const {width, height} = useSizeScreen();

  if(width > 1023 ){ 
    return(
      <nav className='menu-container'>
        <Link to='/'><img src={logo} alt='logo' className='logo'/></Link>
        <ul>
          <li><Link to='/nosotros'><ButtonGeneric>Nosotros</ButtonGeneric></Link></li>
          <li><Link to='/equipos-y-productos'><ButtonGeneric>Equipos y productos</ButtonGeneric></Link></li>
          <li><Link to='/servicios'><ButtonGeneric>Servicios</ButtonGeneric></Link></li>
          <li><Link to='/contacto'><ButtonGeneric>Contacto</ButtonGeneric></Link></li>
          <li><Link to='/cuenta'><ButtonGeneric>Cuenta</ButtonGeneric></Link></li>
        </ul>      
      </nav>  
    )} 
  return <p>Otro Menu</p>
    
  
}
export default Nav;
