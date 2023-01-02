import React from 'react'

const Cartreducer = (state,action) => {
if(action.type === "ADD_TO_CART"){
    let {id,products} = action.payload;
  
    // console.log(products);




    let cardProduct;
    cardProduct={
        id:id,
        title:products.title,
        image:products.image,
        price:products.price,
        quantity:1,



    }
return{
    ...state,
    cart:[...state.cart,cardProduct],
};
}
  return state;
}

export default Cartreducer