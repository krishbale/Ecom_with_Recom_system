import React, { useState } from 'react'
import '../styles/cartui.css'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import styled from 'styled-components';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

// import DeleteIcon from '@mui/icons-material/Delete';

import { useCartContext } from '../context/Cartcontext';
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';
import { Button } from '@mui/material';
const Cartui = () => {

  const navigate = useNavigate();
  const [loading, isloading] = useState(false);
  const { cart, removeItem, clearCart, totalItem, totalAmount, increment, decrement } = useCartContext()

  if(cart.length === 0){
    return(
      <>
        <div>
          <h3>No item in the cart</h3>
        </div>
      </>
    )
 
     
  
  };

  return (
    <>
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
  

</div>






  

      {/* <table  border={{}}>


        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>

          </tr>

        </thead>

        {

          Array.isArray(cart) ?

            cart.map((item, index) =>

              <tbody key={index}>
                <tr>
                  <td>{item.id}</td>
                  <td><img style={{ height: "20px", width: "20px" }} src={item.image} alt="phone" /></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>

                    <AddCircleIcon onClick={() => increment(item.id)} style={{ height: "20px", width: "20px" }} alt="+" />

                    {item.quantity}

                    <RemoveCircleIcon onClick={() => decrement(item.id)} style={{ height: "20px", width: "20px" }} alt="-" />

                  </td>
                  <td>{item.price * item.quantity}</td>
                  <td onClick={() => removeItem(item.id)}>

                    <DeleteIcon style={{ height: "20px", width: "20px" }} alt="delet" />

                  </td>
                </tr>



              </tbody>




            ) : isloading(true)


        }
        <tfoot>
          <tr>
            <td>
              <p>Items:{totalItem}</p>
            </td>
            <td>


            </td>
            <td></td>

            <td></td>
            <td>  </td>
            <td>
              <p>Net Total:${totalAmount}</p>
            </td>

            <td onClick={clearCart}>
              <RemoveShoppingCartIcon style={{ height: "20px", width: "20px" }} alt="Clear Cart" />
            </td>
          </tr>




        </tfoot>


      </table>

      <br />
      <div  ><button className="back" onClick={() => navigate('/')}><FirstPageIcon />Continue Shopping</button>
        <button className="back" onClick={() => navigate('/checkoutpage')}><PriceCheckIcon /> Checkout</button></div>

 */}

    </>
  )
};
// const EmptyDiv = styled.div`
// display:grid;
// place-it`
// const Wrapper = styled.section`
// padding:9rem 0;`

export default Cartui