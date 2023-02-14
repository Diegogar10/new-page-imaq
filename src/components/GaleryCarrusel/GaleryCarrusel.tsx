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

  const initialState:{
    i: number;
    load: boolean;
  } = {
    i: 0,
    load: false
  }

  const [data, setData] = useState(initialState);
  

  useLayoutEffect(()=>{
    setTimeout(()=>{
      if(data.i >= (info.length - 1)){
        setData({
          load:false,
          i:0,
        });
      } else {
        setData({
          load:false,
          i:data.i + 1,
        });
      } 
    },5000);
  },[data.i]);

  
  const toggleClass = () => {
    setTimeout(()=>{
      setData({
        ...data,
        load: true
      });
    },4500);
  }

   

  return (
    <>    
      <div className='galery-container'>
        <img onLoad={toggleClass} className={data.load ? 'picture active' : 'picture'} src={info[data.i].url} alt='imagen'/>
      </div>
    </>
  )
}

export default GaleryCarrusel;
