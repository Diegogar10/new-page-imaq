import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Colors } from '../../../utils/Colors';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/LogoImaq.png';
import './NavSmall.scss';

export default function NavSmall() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const colorTheme = Colors.blueDark; 
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar-container'>
      <Button
        id="positioned-button"
        aria-controls={open ? 'positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{color:'white'}}/>
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link to='/'><MenuItem divider={true} sx={{color:colorTheme}} onClick={handleClose}>Home</MenuItem></Link>
        <Link to='/nosotros'><MenuItem divider={true} sx={{color:colorTheme}} onClick={handleClose}>Nosotros</MenuItem></Link>
        <Link to='/productos'><MenuItem divider={true} sx={{color:colorTheme}} onClick={handleClose}>Productos</MenuItem></Link>
        <Link to='/equipos'><MenuItem divider={true} sx={{color:colorTheme}} onClick={handleClose}>Equipos</MenuItem></Link>
        <Link to='/servicios'><MenuItem divider={true} sx={{color:colorTheme}} onClick={handleClose}>Servicios</MenuItem></Link>
      </Menu>
      <div className='cointainer-logo'>
        <img src={logo} alt='logo' className='logo'/>
      </div>
    </div>
  );
}