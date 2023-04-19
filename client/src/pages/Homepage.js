import React from 'react'
import '../styles/Homepage.css';
import { NavLink } from 'react-router-dom';
import { Box, Button, Grid } from '@mui/material';
import herosectionimage from '../assets/purple_laptop.png';
import imagedata from '../components/imagedata';
import Item from '../components/Item';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import {Button} from '@mui/material';
import Card from '../components/Card';
import { Carousel } from 'react-responsive-carousel';

import { Fetchallproducts } from '../hooks/FetchAll';
import Home from '@mui/icons-material/Home';
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

 
         {/* <div className="hero-section-data">
        <p>Categories</p>
        <p>All</p>
        <p>Laptop</p>
        <p>Desktop</p>
        <p>Electronics</p>
        <p>Smartphone</p>
        <p>Elect</p>
           
           
             
</div> */}
       
   
        <div className="carousel">
      
        </div>

      
     
  </div>
    </>
  

  
  )
  
/* }
  //   <div className='section_homepage'>
  // // <div className="hero-section-data">
  // //           <h2 className="intro-data">Welcome to </h2>
  // //           <h1>BAB STORE</h1>
           
            
  // //           <p>
  // //           Welcome to our online store! We offer a wide range of high-quality electronics at competitive prices. From the latest smartphones and laptops to home appliances and entertainment systems, we have everything you need to stay connected and entertained. Browse our selection and enjoy fast and reliable delivery right to your doorstep. Shop with us today and experience the convenience of online shopping!
  // //           </p>
  // //           <NavLink  to={'/allproducts'}>
  // //             <Button>Start Shopping</Button>
  // //           </NavLink>
  // //           <div className="carousel">
  // //           <Carousel
  // //   //  */}

   
  // //       >
  // //         {
  // //           allproducts.map((item,i) => 
  // //           <Card key={i} product ={item} />
  // //           )
  // //         }
  // //       </Carousel>
           
  // //           </div>
           
  // //         </div> 
        
  // //         <div className="hero-section-image">
  //         {/* <NavLink to={'/details/25'} >
  //         <img 
  //               src={herosectionimage}
  //               alt=""
  //               className="img-style"
  //             />
  //         </NavLink> */}
             

           
         
  //     // </div> 
       
 
         
             

           
         
       
  //   // </div>
  
     
   

     
    
    
   
  // )
// }

export default Homepage
         