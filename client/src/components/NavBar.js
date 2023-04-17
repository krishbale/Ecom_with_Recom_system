import React, { useContext } from 'react'
import {  LoginContext } from '../App';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import {
  
  Routes,
  Route,
  Link

} from "react-router-dom";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

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
  const [showmenu,setshowmenu] = useState(false);
  
  const {state} = useContext(LoginContext);
  const { totalItem  } = useCartContext();
  const handlemenu = ()=>{
    showmenu?setshowmenu(false):setshowmenu(true)
  }
  // const handlehambuger = ()=>{


  // }
  return (
        <> 
         {/* productitem ${hidemenu ? ' hide' : ''} `}> */}
        <div >
          
          <div  onClick={handlemenu} className={`hamburger`} >
          <MenuIcon  className={`${showmenu ? 'close': ' show'}`} />
          <LogoutSharpIcon className={` ${showmenu? 'show':' close'}`} />
          </div>
          <nav className={`navbar ${showmenu ? ' nav_open':' nav_close'}`}>
            <ul>
              <li>
              <Link to="/">
              {/* <img src={logo} alt="Logo" /> */}
              </Link></li>
            </ul>
            <ul>
               
            
            {state==="false"? <>
            <li onClick={handlemenu} className="nav_items active">
                <Link  to="/login">Login</Link>
              </li>
              <li  onClick={handlemenu}  className="nav_items active">
                <Link  to="/register">Register</Link>
              </li>
            </> 
              :
              <>
              <li onClick={handlemenu} className="nav_items active">
                <Link to="/">

                Home
                </Link>
                
              </li>
              <li onClick={handlemenu} className="nav_items active" >
                <Link to="/about">
              About
                </Link>
              </li>
              <li onClick={handlemenu} className="nav_items active">
                <Link  to="/contact">Contact</Link>
              </li>
              <li onClick={handlemenu} key={totalItem} className="nav_items active">
                <Link  to="/cart/">
                <ShoppingCartSharpIcon />
                  
                    <span className='noti_count'>{totalItem}</span>
                  </Link>
              </li>

              <li onClick={handlemenu} className="nav_items active">
                <Link  to="/logout">
                <PersonRemoveIcon />
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