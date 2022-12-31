import '../styles/Slider.css'
import {useState,useEffect} from 'react'
import { Link} from "react-router-dom";
import axios from "axios"

function Slider() {
   const [products ,setProducts]=useState([]);
   useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get('/products');
      setProducts(data.data);
      
      console.log(data);
    };
    fetchdata();
  }, []);
// console.log(products.data)

return(
 <> 
 <h1>All Product</h1>
  <div className='productitem'>
 {products.map((product)=>{
             const {id,title,price, description ,category, image, rating, count} = product;
             return(
                 <div className='card' key={id}>
                         <div className='image'>
                         <img src={image} alt="image" />
                         </div>
                      
                         <div className='des'>
                             <h2>{title.slice(0,25)}</h2>
                             <span>
                             <h3>Price:{price}</h3>
                             <h3>rating:{rating.rate}</h3>
                              <div>
                              
                              </div>
                              <div>
                              <Link to={`/details/${id}`} className='btn '>Learn More</Link>
                              </div>
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


