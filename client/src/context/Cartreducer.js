const Cartreducer = (state,action) => {

    //Add to cart
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
///remove item

if(action.type === 'REMOVE_ITEM'){
    return{
        ...state,
        cart:state.cart.filter((curlElem)=>{
            return curlElem.id !== action.payload
        })
    }
}

//add item
if(action.type === 'ADD_ITEM'){
    const updatedcart= state.cart.map((curlElem) => {
        if(curlElem.id === action.payload) {
            return { ...curlElem,quantity:curlElem.quantity + 1};
        }
        return curlElem;

    });
    return { ...state, cart: updatedcart };

  
}

//sub item
if(action.type === 'SUB_ITEM'){
    const updatedCart = state.cart
  .map((curElem) => {
    if (curElem.id === action.payload) {
      return { ...curElem, quantity: curElem.quantity - 1 };
    }
    return curElem;
  })
  .filter((curElem) => curElem.quantity !== 0);
return { ...state, cart: updatedCart };

  
}


//get total
if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.cart.reduce(
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

//clear cart

if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  return state;
  
    


}

export default Cartreducer