import React, { useContext } from 'react'
import carticon  from '../assets/cart.svg'
import {  LoginContext } from '../App';
import { useState } from 'react'
import {
  
  Routes,
  Route,
  Link

} from "react-router-dom";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import HomeIcon from '@mui/icons-material/Home';
import "../styles/NavBar.css";
import Slider from "../pages/Slider"
import Cart from './Cartui'
import Detail from '../pages/Detail';
import { useCartContext } from '../context/Cartcontext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Logout from '../pages/Logout';
import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const NavBar = () => {
  
  const {state} = useContext(LoginContext);
  const { totalItem  } = useCartContext();
  
  return (
        <>  
        <div  className="navbar">
          <nav>
            <ul>
              <li>
              <Link to="/">
              {/* <img src={logo} alt="Logo" /> */}
              </Link></li>
            </ul>
            <ul>
               
            
            {state==="false"? <>
            <li className="nav_items active">
                <Link  to="/login">Login</Link>
              </li>
              <li className="nav_items active">
                <Link  to="/register">Register</Link>
              </li>
            </> 
              :
              <>
              <li className="nav_items active">
                <Link to="/">

                Home
                </Link>
                
              </li>
              <li className="nav_items active">
                <Link to="/about">
              About
                </Link>
              </li>
              <li className="nav_items active">
                <Link  to="/contact">Contact</Link>
              </li>
              <li key={totalItem} className="nav_items active">
                <Link  to="/cart/">
                <ShoppingCartSharpIcon />
                  
                    <span className='noti_count'>{totalItem}</span>
                  </Link>
              </li>

              <li className="nav_items active">
                <Link  to="/logout">
                <LogoutSharpIcon />
                </Link>
              </li>
              <li>
                
             
              </li>
              </>
             
            }
            </ul>
          </nav>
          <Routes >
            <Route path="/" element={<Slider />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/cart/" element={ <Cart />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/checkoutpage" element={<Checkout />} />
            <Route path="/payment/esewa" element={<Payment />} />
          </Routes>
        </div>
    </>
  )
}

export default NavBar