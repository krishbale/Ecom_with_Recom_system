import React from 'react'
import '../styles/Homepage.css';

import imagedata from '../components/imagedata';
import Item from '../components/Item';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// i
import Card from '../components/Card';
import { Carousel } from 'react-responsive-carousel';

import { Fetchallproducts } from '../hooks/FetchAll';


const Homepage = () => {


 


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

 
       
       
   
        <div className="carousel">
        {/* {
          randomproducts.map((product,indes) =>{
            <Card key={indes} product={product} />
          })
        } */}
      
        </div>

      
     
  </div>
    </>
  

  
  )
  
}

export default Homepage
         