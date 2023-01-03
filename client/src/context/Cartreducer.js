import React from 'react'

const Cartreducer = (state,action) => {
if(action.type === "ADD_TO_CART"){
    let {products} = action.payload;
  
    // console.log(`details products:${products.id}`);




    let cardProduct;
    cardProduct={

        "id":products.id,
        "title":products.title,
        "image":products.image,
        "price":products.price,
        "quantity":1,



    }
    // console.log(cardProduct)
return{
    ...state,
    cart:[...state.cart,cardProduct],
    
};
}
  return state;
}

export default Cartreducer