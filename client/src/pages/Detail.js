import React from 'react'
import "../styles/Detail.css"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useCartContext } from '../context/Cartcontext'
import { Fetchsingledata } from '../hooks/Fetchdata';

function Detail() {
  let { id } = useParams()
  const {addtoCart} = useCartContext(); 
  let navigate = useNavigate();

  
  const {data,loading} = Fetchsingledata(id);
   const displayconsole= (data)=>{
    window.alert(` 1 item ${data.title} is added to the cart`)


   }
  
if(!loading){
  return(
    <>
    
      <div className='detail'>

        <div className="image-container">
          <div className='image'>
          <img src={data.image} alt=""/>
          </div>
        
        </div>
        <div className="description">
          <div className='title'><h1>{data.title}</h1></div>
          <div className='des'>
          <p>{data.description}</p>
          </div>
          
          <span>
          <h3>Price:${data.price}</h3>
          {/* {console.log(data.id)} */}
           <NavLink 
           onClick={()=> addtoCart(data)} 
           to={'/cart'}>
          <button     className='cartbutton'>Buy </button>
          </NavLink> 
         
         
          <button  onClick={()=> [addtoCart(data),displayconsole(data)]}  className='cartbutton'>Add to Cart</button>
          <div  ><button className="back" onClick={() => navigate(-1)}>Continue Shopping</button></div>
          </span>
         
        </div>
      </div>  


    </>
  );
}else if(loading){
  <>
    <h1>Loading ....</h1>
  </>

}

}

export default Detail

