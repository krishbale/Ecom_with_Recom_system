import React from 'react'
import '../styles/Homepage.css';

import imagedata from '../components/imagedata';
import Item from '../components/Item';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// i
import Card from '../components/Card';
import { Carousel } from 'react-responsive-carousel';
import { Carousel as carousel} from 'react-material-ui-carousel'
import { Fetchallproducts } from '../hooks/FetchAll';


const Homepage = () => {

  const {allproducts ,loading} = Fetchallproducts('/products');
 


  return (
    <>
  <div className='section_homepage'>
  
  <Carousel>
  {
        imagedata.map((item,i) => 
        <Item key={i} item = {item} />
        )
      }
            </Carousel>

 
       
       
   
        <div className="productitem">
          <Carousel>
 {/* {allproducts.map((product) => {
         
         return (
      
           <Card key={product.id} product={product} />

         
         )
       })} */}
          </Carousel>

 

      
      
        </div>

      
     
  </div>
    </>
  

  
  )
  
}

export default Homepage
         