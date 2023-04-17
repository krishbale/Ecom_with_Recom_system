import React from 'react'
import '../styles/Homepage.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import herosectionimage from '../assets/purple_laptop.png';


const Homepage = () => {
  return (
    <section>
  
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> Ecommerce Website With Recommendation System </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>Start Shopping</Button>
            </NavLink>
          </div>
        
          <div className="hero-section-image">
          
              <img
                src={herosectionimage}
                alt="hero-section-photo"
                className="img-style"
              />
           
         
      </div>
    </section>
  
     
   

     
    
    
   
  )
}

export default Homepage