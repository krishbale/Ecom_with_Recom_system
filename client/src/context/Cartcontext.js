import {createContext, useContext, useReducer} from 'react'
import reducer from '../context/Cartreducer';
 const CartContext = createContext();

const CartProvider = ({children})=>{
    const initialState = {
        cart:[],
        

    }
const [state,dispatch] = useReducer(reducer,initialState)
const addtoCart=(id,products)=>{
    dispatch({type:"ADD_TO_CART",payload:{id,products}});

}


    return (
        <>
 <CartContext.Provider value={{ ...state,addtoCart}}>
{children}
 </CartContext.Provider>
 
        </>
    )  

}
const useCartContext =()=>{
    return useContext(CartContext);
}
export { CartProvider , useCartContext };