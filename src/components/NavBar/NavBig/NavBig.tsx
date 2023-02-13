import { Link } from 'react-router-dom';
import ButtonGeneric from '../../ButtonGeneric/ButtonGeneric';
import logo from '../../../assets/icons/LogoImaq.png';
import './NavBig.scss';

const NavBig = () => {

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
  )
}

export default NavBig;