import React from 'react';
import NavBig from './NavBig/NavBig';
import useSizeScreen from '../../hooks/useSizeScreen';
import NavSmall from './NavSmall/NavSmall';

const NavBar = () => {

  const {width, height} = useSizeScreen();
    
  return (width > 1023) && <NavBig/> || <NavSmall/> 
  
  
}
export default NavBar;
