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
   
  
if(!loading){
  return(
    <>
    <div  ><button className="back" onClick={() => navigate(-1)}>go back</button></div>
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
           <NavLink 
           onClick={()=> addtoCart(data.id,data)} 
           to={'/cart'}>
          <button  className='cartbutton'>Add to Cart</button>
          </NavLink> 
         
          <button  className='cartbutton'>Buy </button>
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

