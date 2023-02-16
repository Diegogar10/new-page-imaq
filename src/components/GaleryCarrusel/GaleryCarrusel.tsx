import React, { useEffect, useLayoutEffect, useState } from 'react';
import './GaleryCarrusel.scss';
import imagen from '../../assets/pics/HornosBelmonte.jpeg'
import { photos } from '../../data/info';
import ButtonMovile from '../ButtonMovile/ButtonMovile';
const GaleryCarrusel = ({ info }:{ info: photos[] }) => {
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
    },8000);
  },[data.i]);

  const toggleClass = () => {
    setTimeout(()=>{
      setData({
        ...data,
        load: true
      });
    },7500);
  }
  
  return (
    <>    
      <div className='galery__container'>
        <div className='opacity__container'>
          <img onLoad={toggleClass} className={data.load ? 'picture active' : 'picture'} src={info[data.i].url} alt='imagen'/>
        </div>
        <section className='description__container'>
          <h2 className='title'>{info[data.i].title}</h2>
          <p className='description'>
            {info[data.i].description}
          </p>
          <ButtonMovile action={''} title='Equipos' style='primary' width={125}/>
          <ButtonMovile action={''} title='Nosotros' style='secondary' width={125}/>
        </section>
      </div>
    </>
  )
}

export default GaleryCarrusel;
