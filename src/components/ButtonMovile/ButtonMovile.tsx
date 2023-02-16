import React from 'react'
import { Link } from 'react-router-dom';
import './ButtonMovile.scss';

const ButtonMovile = (
  {
    action,
    title,
    style,
    width=80,
    height=40
  }:{
    action: string | Function | any;
    title: string;
    style: 'primary' | 'secondary';
    width?: number;
    height?: number;
  }) => {
    const valid: boolean = typeof(action) === 'function';  
  return (
    valid && 
      <button className={`button${style}`} onClick={action}>{ title }</button>
      ||
      <Link to={action}>
        <button style={{width:`${width}px`, height:`${height}px`}} className={`button${style}`}>
          {title}
        </button>
      </Link>

  )
}

export default ButtonMovile
