import React, { useContext } from 'react'
import {  LoginContext } from '../App';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@mui/material';
import { useState } from 'react'
import {
  
  Routes,
  Route,
  Link

} from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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

import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Homepage from '../pages/Homepage';

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
          <Icon fontSize="large">
          <MenuIcon   className={`${showmenu ? 'close': ' show'}`} />
          <LogoutSharpIcon className={` ${showmenu? 'show':' close'}`} />
          </Icon>


         
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
                <Link  to="/login">
                  <AccountCircleIcon />
                </Link>
              </li>
              <li  onClick={handlemenu}  className="nav_items active">
                <Link  to="/register">
                  <PersonAddIcon />
                </Link>
              </li>
            </> 
              :
              <>
              <li onClick={handlemenu} className="nav_items active">
                <Link to="/">
                Home
                
                </Link>
                
              </li>
              <li onClick={handlemenu} className="nav_items active">
                <Link to="/allproducts">
                Store
                
                </Link>
                
              </li>
              {/* <li onClick={handlemenu} className="nav_items active" >
              
              Sell More On App
               
              </li> */}
              {/* <li onClick={handlemenu} className="nav_items active" >
                
              </li> */}
              {/* <li onClick={handlemenu} className="nav_items active" >
                Customer Care
              </li> */}
              <li onClick={handlemenu}  className="nav_items active" >
                 <Link  to="/checkoutpage"> Checkout</Link>
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
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/allproducts" element={<Slider />} />
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