import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useCartContext } from '../context/Cartcontext'
import cart from '../assets/cart.svg'
import axios from 'axios';
import { Fetchallproducts } from '../hooks/FetchAll';
const Foryou = ({}) => {
  const [recom,getrecom] = useState([]);
  const { id } = useParams();
  const {allproducts ,loading} = Fetchallproducts();
  const Getrecommend = async () => {
    try{
        const  similarDocument  = await axios.get(`/recomdata/${id}`)
        console.log(similarDocument.data)
        getrecom(similarDocument.data);
        
    
       
    }catch(e){
        console.log(e);
    }
    
    useEffect(() => {
      Getrecommend();
    
      
    }, [id])
  



}

    const {addtoCart} = useCartContext(); 
    const displayconsole= (title)=>{
      window.scrollTo({
        top:0,
        behavior:'smooth',
      })
  
  
     }
    
  return (
    <>
      
      {/* <div className="1All">for you</div> */}
        {allproducts.map((item) => 
        {
            const { id, title, price,   image, rating,  } = item;
            return (
            <div className='1card' key={id}>
              <div className='1item'>
              <Link to={`/details/${id}`}>
                <div className='1image'>
                  <img src={image} alt="logo" />
                  <div className="1overlay">
                <div className="1learnmore">
                  <h3>Learn More</h3>
                </div>
              </div>
                </div>
                </Link>
                <div className='1des'>
                  <h3>{title.substring(0, 18)}...</h3>
                  <span>
                    <div>
                      <h5>Price:{price}</h5>
                      <h5>rating:{rating.rate}</h5>
                    </div>
                    <div>
                    <button  onClick={()=> [addtoCart(item),displayconsole(title)]}  className='1cartbutton'>
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