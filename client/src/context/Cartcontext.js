import {createContext,useEffect, useContext, useReducer} from 'react'
import reducer from '../context/Cartreducer';
 const CartContext = createContext();

const CartProvider = ({children})=>{
    const initialState = {
        cart:[],
        totalAmount:0,
        totalItem:0,
       
        
      
        

    }
const [state,dispatch] = useReducer(reducer,initialState)
const addtoCart=(products)=>{
    dispatch({type:"ADD_TO_CART",payload:{products}});
    // console.log(products)

}
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
    
  }, [state.cart]);






    return (
        <>
 <CartContext.Provider value={{ ...state,addtoCart,removeItem,increment,decrement,clearCart}}>
{children}
 </CartContext.Provider>
 
        </>
    )  

}
const useCartContext = () => {
    return useContext(CartContext);
}
export { CartProvider , useCartContext };