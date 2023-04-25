import React, { useState } from 'react'
import '../styles/cartui.css'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import styled from 'styled-components';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import Checkout from '../pages/Checkout';
// import DeleteIcon from '@mui/icons-material/Delete';
import { Wrapper } from './Cart.style';
import { useCartContext } from '../context/Cartcontext';
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';
import { Button, Drawer } from '@mui/material';
const Cartui = () => {

  const navigate = useNavigate();
  const [loading, isloading] = useState(false);
  const { cart, removeItem, clearCart, totalItem, totalAmount, increment, decrement } = useCartContext()
  return (
    <>
    <Wrapper>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : null}
      {cart.map((curElem,index) => (
        <CartItem
          key={index}
          curElem={curElem}
        />
      ))}
    
      <h2>Total Set:{cart.length}</h2>
      <h2>Total: ${totalAmount}</h2>
      {cart.length && <>
        <Button><RemoveShoppingCartIcon /> Remove All</Button>
        <br />
       
        <Button  onClick={ () =>  navigate('/checkoutpage')}>Checkout</Button>
        <br />
        {/* <Button  onClick={() => navigate('/')} >Continue shopping:</Button> */}
     
      </>}
      
      
    </Wrapper>







  



    </>
  )
};

export default Cartui