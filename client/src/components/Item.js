import React from 'react'
import { Paper, Button } from '@mui/material'
import { NavLink } from 'react-router-dom';

const Item = ({item}) => {
    const {image,id,description,title,brand,price} =item;
  return (
    <>
{/* <NavLink to="details/41"> */}
<img className='home__image' src={image} alt="" />
 {/* </NavLink> */}
 
  
    </>

 
  )
}

export default Item