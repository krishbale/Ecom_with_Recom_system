import React from 'react'
import "../styles/Detail.css"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useCartContext } from '../context/Cartcontext'
import { Fetchsingledata } from '../hooks/Fetchdata';
import { Fetchallproducts } from '../hooks/FetchAll';
import { Link } from "react-router-dom";
function Detail() {
  // let array = [1,2,3,4]
  let { id } = useParams()
  const {addtoCart} = useCartContext(); 
  let navigate = useNavigate();
  //fetching data
  const {allproducts } = Fetchallproducts(`/getrecom/${id}`);
  //
    let array = allproducts;
  const {data,loading} = Fetchsingledata(id);

   const displayconsole= (data)=>{
    window.alert(` 1 item ${data.title} is added to the cart`)


   }
if(!loading){
  return(
    <>
    
      <div key={data.id} className='detail'>

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
      
      <div className="product_section  center">Recommended products for you</div>
    
      <div className='productitem'>
      {
        array.map((product,i) => {
          return (
            <>  
              <div  className='card' key={product.id} >
              <div key={product.id}  className='item'>
              <Link to={`/details/${product.id}`}>
                <div className='image'>
                  <img src={product.image} alt={product.title} />
                  <div className="overlay">
                <div className="learnmore">
                  <h3>Learn More </h3>
                </div>
              </div>
                </div>
                </Link>
                <div className='des'>
                  <h3>{product.title.substring(0, 18)}...</h3>
                  <span>
                    <div>
                      <h5>Price:{product.price}</h5>
                      <h5>rating:"4"</h5>
                    </div>
                    <div>
                    <button  onClick={()=> [addtoCart("product"),displayconsole("title")]}  className='cartbutton'>
                    {/* <img src={"cart"} alt="Add to Cart " style={{height:"25px",width:'30px'}} /> */}Add to Cart
                    </button>
                  

                   
                 
                    </div>
                  </span>

                </div>
              </div>
            </div>
            
              
            
            </>
          
          )
        })

      }
    
      
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

