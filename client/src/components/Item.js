import React from 'react'
import { Paper, Button } from '@mui/material'

const Item = ({item}) => {
    const {image,id,description,title,brand,price} =item;
  return (
 
    <img src={image} alt="" />
 
  )
}

export default Item