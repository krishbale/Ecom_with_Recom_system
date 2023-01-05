import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/Cartcontext'
import cart from '../assets/cart.svg'
const Foryou = ({allproducts}) => {
    const {addtoCart} = useCartContext(); 
    const displayconsole= (title)=>{
      window.scrollTo({
        top:0,
        behavior:'smooth',
      })
  
  
     }
    
  return (
    <>
      
      {/* <div className="All">for you</div> */}
        {Array.isArray(allproducts) && allproducts.map((item) => 
        {
            const { id, title, price, description,  image,   } = item;
            return (
            <div className='card' key={id}>
              <div className='item'>
              <Link to={`/details/${id}`}>
                <div className='image'>
                  <img src={image} alt="logo" />
                  <div className="overlay">
                <div className="learnmore">
                  <h3>Learn More</h3>
                </div>
              </div>
                </div>
                </Link>
                <div className='des'>
                  <h3>{title.substring(0, 18)}...</h3>
                  <span>
                    <div>
                      <h5>Price:{price}</h5>
                     
                    </div>
                    <div>
                    <button  onClick={()=> [addtoCart(item),displayconsole(title)]}  className='cartbutton'>
                    <img src={cart} alt="Add to Cart " style={{height:"25px",width:'30px'}} />
                    </button>
                  

                   
                 
                    </div>
                  </span>

                </div>
              </div>
            </div>

          )
        })}
      
    </>
  )
        }
        

  


export default Foryou