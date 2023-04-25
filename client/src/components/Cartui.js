import React, { useState } from 'react'
import '../styles/cartui.css'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import styled from 'styled-components';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

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
      <h2>Total: ${totalAmount}</h2>
    </Wrapper>
{/*     
<div className="table">
  <div className="table-row">
    <div className="table-cell">id</div>
    <div className="table-cell">Image</div>
    <div className="table-cell">Name</div>
    <div className="table-cell">Price</div>
    <div className="table-cell">Quantity</div>
    <div className="table-cell">Remove</div>
  </div>
  


      {cart.map((curElem,index) =>{
        return <CartItem key={index} curElem={curElem} />

      })}
      <Button>Items:{totalItem}</Button>

  <Button>Net Total:${totalAmount}</Button>
  
  <Button onClick={clearCart}>Clear Cart:
              <RemoveShoppingCartIcon style={{ height: "20px", width: "20px" }} alt="Clear Cart" />
            </Button>
            <div  ><Button className="back" onClick={() => navigate('/')}>Continue Shopping</Button>
        <Button className="back" onClick={() => navigate('/checkoutpage')}>Checkout</Button></div>
  

</div> */}






  



    </>
  )
};

export default Cartui