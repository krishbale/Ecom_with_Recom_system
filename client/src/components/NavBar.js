import React from 'react'
import carticon  from '../assets/cart.svg'
import {
  
  Routes,
  Route,
  Link
} from "react-router-dom";
import "../styles/NavBar.css";
import Slider from "../components/Slider"
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Cart from '../pages/Cartui'
import Detail from '../pages/Detail';

const NavBar = () => {
  return (
    <>  

      
        <div className="navbar">
          <nav>
            <ul>
              <li>logo</li>
            </ul>
            <ul>
            <li className="nav_items active">
                <Link to="/cart/"><img src={carticon} style={{height:"20px",width:"30px"}} alt="Cart"/></Link>
              </li>
              <li className="nav_items active">
                <Link to="/">Home</Link>
                
              </li>
              <li className="nav_items active">
                <Link to="/about">About</Link>
              </li>
              <li className="nav_items active">
                <Link  to="/contact">Contact</Link>
              </li>
              <li className="nav_items active">
                <Link to="/login">Login</Link>
              </li>
             
            </ul>
          </nav>
          <Routes >
            <Route path="/" element={<Slider />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/details/:id" element={<Detail />} />
          </Routes>
        </div>
    
    </>
  )
}

export default NavBar