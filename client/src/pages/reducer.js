import { useEffect } from "react";


export const reducer = (state,action) => {



  



    if(action.type === 'REMOVE_ITEM'){
        return{
            ...state,
            item:state.item.filter((curlElem)=>{
                return curlElem.id !== action.payload
            })
        }
    }
    if(action.type === 'ADD_ITEM'){
        const updatedcart= state.item.map((curlElem) => {
            if(curlElem.id === action.payload) {
                return { ...curlElem,quantity:curlElem.quantity + 1};
            }
            return curlElem;

        });
        return { ...state, item: updatedcart };
  
      
    }
    if(action.type === 'SUB_ITEM'){
        const updatedCart = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, item: updatedCart };
  
      
    }
    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      }
      if (action.type === "CLEAR_CART") {
        return { ...state, item: [] };
      }
        return state;

};