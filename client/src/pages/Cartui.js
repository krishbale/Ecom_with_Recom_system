import React, {  useState  } from 'react'
import '../styles/AddtoCart.css'
import add from '../assets/add.svg'
import minus from '../assets/minus.svg'
import delet from '../assets/delete.svg'
import emptycart from '../assets/clearcart.svg'
import { useCartContext } from '../context/Cartcontext';
import { useNavigate } from 'react-router-dom'
const Cartui = () => {
  const navigate = useNavigate();
    const [loading,isloading] = useState(false);
    const { cart,removeItem,clearCart,totalItem,totalAmount,increment,decrement  } = useCartContext()
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

    Array.isArray(cart) ?  
    
    cart.map((item,index)=>
    
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
   
    <br />
    <div><button  onClick={() => navigate('/')}>Continue Shopping</button>
    <button>Checkout</button>
    </div>
   
   

  </>
  )
}

export default Cartui