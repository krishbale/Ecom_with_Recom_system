import React, { createContext, useReducer,useEffect } from 'react'
import {reducer} from '../pages/reducer'
import '../styles/AddtoCart.css'
import Cartui from './Cartui'
import { useCartContext } from '../context/Cartcontext';

import { products } from '../context/products';
export const  CartContext = createContext();


const initialState = {
  // cart:[],
  item:products,
  totalAmount:0,
  totalItem:0,



};
const Cart = () => {
  const { cart } = useCartContext();
  const [state,dispatch] = useReducer(reducer,initialState);
  const removeItem = (id) => {
    return dispatch({
      type:'REMOVE_ITEM',
      payload:id,
    })

  }
  const increment = (id) => {
    return dispatch({
      type:'ADD_ITEM',
      payload:id,
    })

  }
  const decrement = (id) => {
    return dispatch({
      type:'SUB_ITEM',
      payload:id,
    })

  }
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);




  return (
    <>
    <CartContext.Provider value={{... state,removeItem,increment,decrement,clearCart}}>
    <Cartui />
    </CartContext.Provider>
 
    </>
  
   
  )
}

export default Cart