import React, { useContext, useState  } from 'react'
import { CartContext } from './Cart';
import add from '../assets/add.svg'
import minus from '../assets/minus.svg'
import delet from '../assets/delete.svg'
import emptycart from '../assets/clearcart.svg'
import { useCartContext } from '../context/Cartcontext';
const Cartui = () => {
    const [loading,isloading] = useState(false);
    const { cart } = useCartContext()
    console.log(cart);
   


     const {item,removeItem,clearCart,totalItem,totalAmount,increment,decrement } = useContext(CartContext)
     if(loading){
        return(
            <>
                <h1>Loading ....</h1>
            </>
        )
     }
   
  return (
    <>
    <table border={{}}>
   

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

    Array.isArray(item) ?  
    
    item.map((item,index)=>
    
    <tbody key={index}>
      <tr>
      <td>{item.id}</td>
      <td><img style={{height:"20px",width:"20px"}} src={item.image} alt="phone" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
      
        <img  onClick={()=> increment(item.id)} style={{height:"20px",width:"20px"}} src={add} alt="+" />
      
     { item.quantity}
      
        <img  onClick={()=> decrement(item.id)} style={{height:"20px",width:"20px"}} src={minus} alt="-" />
      
      </td>
      <td>{item.price * item.quantity}</td>
        <td onClick={()=> removeItem(item.id)}>
            
                <img  style={{height:"20px",width:"20px"}} src={delet} alt="delet" />
            
        </td>
      </tr>


     
      </tbody>



  
    ):isloading(true)


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
        <img  style={{height:"20px",width:"20px"}} src={emptycart} alt="Clear Cart" />
    </td>
  </tr>
  
  
    

  </tfoot>

  
    </table>
    <button>Checkout</button>
    <br />
    <button>  Continue Shopping</button>

 
  <br />

  
    <br />
   

  </>
  )
}

export default Cartui