import React from 'react';
import GaleryCarrusel from '../components/GaleryCarrusel/GaleryCarrusel';
import { galeryHome } from '../data/info';

const Home = () => {


  return (
    <div className='main__container'>
      <GaleryCarrusel info={galeryHome}/>
    </div>
  )
}

export default Home;