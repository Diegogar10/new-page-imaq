import React from 'react';
import NavBig from './NavBig/NavBig';
import useSizeScreen from '../../hooks/useSizeScreen';
import NavSmall from './NavSmall/NavSmall';

const NavBar = () => {

  const {width, height} = useSizeScreen();

  if(width > 1023 ){ 
    return(
      <NavBig/> 
    )} 
  return <NavSmall/>
    
  
}
export default NavBar;
