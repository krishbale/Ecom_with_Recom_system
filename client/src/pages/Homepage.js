import React from 'react'
import '../styles/Homepage.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import herosectionimage from '../assets/purple_laptop.png';

import Card from '../components/Card';
const Homepage = () => {
  const theData = [
    {
      "id": "40",
      "title": "Game-changing MacBook Pro with M1 Pro and M1 Max",
      "price": 140000,
      "brand": "apple",
      "description": " The new MacBook Pro features a 1080p camera, the best audio system in a notebook, and the most advanced connectivity ever in a MacBook Pro Apple today unveiled the completely reimagined MacBook Pro powered by the all-new M1 Pro and M1 Max — the first pro chips designed for the Mac. Available in 14- and 16-inch models, MacBook Pro delivers groundbreaking processing, graphics, and machine learning (ML) performance whether running on battery or plugged in, as well as amazing battery life — enabling workflows previously unimaginable on a notebook. The new MacBook Pro also features a stunning Liquid Retina XDR display, a wide range of ports for advanced connectivity, a 1080p FaceTime HD camera, and the best audio system in a notebook. Combined with macOS Monterey, which is engineered down to its core to take full advantage of M1 Pro and M1 Max, the user experience is simply unrivaled. Shattering the limits of what a notebook can do, MacBook Pro is designed for developers, photographers, filmmakers, 3D artists, scientists, music producers, and anyone who wants the world’s best notebook.",
      "category": "laptop",
      "image": "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
  }, {
    "id": "23",
    "title": "Dell Series",
    "price": 600000,
    "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "laptop",
    "image": "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
]
  return (
    <div className='section_homepage'>
  
          <div className="hero-section-data">
            <h2 className="intro-data">Welcome to </h2>
            <h1>BAB STORE</h1>
           
            
            <p>
            Welcome to our online store! We offer a wide range of high-quality electronics at competitive prices. From the latest smartphones and laptops to home appliances and entertainment systems, we have everything you need to stay connected and entertained. Browse our selection and enjoy fast and reliable delivery right to your doorstep. Shop with us today and experience the convenience of online shopping!
            </p>
            <NavLink  to={'/allproducts'}>
              <Button>Start Shopping</Button>
            </NavLink>
            <div className="carousel">
            {
              theData.map((product) =>{

return(
  <Card key={product.id} product={product} />

)
              })
            }
           
            </div>
           
          </div>
        
          <div className="hero-section-image">
          <NavLink to={'/details/25'} >
          <img 
                src={herosectionimage}
                alt=""
                className="img-style"
              />
          </NavLink>
             

           
         
      </div>
    </div>
  
     
   

     
    
    
   
  )
}

export default Homepage