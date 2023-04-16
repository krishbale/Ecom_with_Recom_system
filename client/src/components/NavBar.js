import React, { useContext } from 'react'
import carticon  from '../assets/cart.svg'
import CloseIcon from '@mui/icons-material/Close';
import {  LoginContext } from '../App';
import MenuIcon from '@mui/icons-material/Menu';
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
        <div  className="navbar">
          <nav>
          <div  onClick={handlemenu} className={`hamburger`} >
          <MenuIcon  className={`${showmenu ? 'close': ' show'}`} />
          <CloseIcon className={` ${showmenu? 'show':' close'}`} />
          </div>
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