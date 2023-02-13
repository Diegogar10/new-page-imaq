import React, { useEffect, useLayoutEffect, useState } from 'react';
import './GaleryCarrusel.scss';
import imagen from '../../assets/pics/HornosBelmonte.jpeg'
import { photos } from '../../data/info';
const GaleryCarrusel = (
  {
    info
  }:{
    info: photos[]
  }
) => {

  const [image, setImage] = useState(imagen);
  const [i, setI]=useState(0);
  
  useLayoutEffect(()=>{
    setTimeout(()=>{
      (i >= (info.length - 1))? setI(0) : setI(i+1);
    },5000);
    setImage(info[i].url);
  },[i]);
  
      
   

  return (
    <>    
      <div className='galery-container'>
        <img className='picture' src={image} alt='imagen'/>
      </div>
    </>
  )
}

export default GaleryCarrusel;
