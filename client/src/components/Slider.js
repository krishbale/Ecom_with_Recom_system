import '../styles/Slider.css'
import React, { useEffect,useState } from 'react'
import axios from "axios"

function Slider() {
   const [products ,setProducts]=useState([]);
   useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get("http://fakestoreapi.com/products");
      setProducts(data);
    };
    fetchdata();
  }, []);
console.log(products)

return(
 <> 
 <h1>All Product</h1>
  <div className='productitem'>
 {products.map((product)=>{
             const {id,title,price, description ,category, image, rate, count} = product;
             return(
                 <div className='card' key={id}>
                         <div className='image'>
                         <img src={image} alt="image" />
                         </div>
                      
                         <div className='des'>
                             <h2>{title.slice(0,25)}</h2>
                             <span>
                             <h3>{price}</h3>
                             <h3>rating</h3>
                             </span>
                           
                         </div>
                          </div>
                     )
         })}
       </div> 
</>
)
}

export default Slider


