import React, { useContext } from 'react'
import carticon  from '../assets/cart.svg'
import {  LoginContext } from '../App';
import {
  
  Routes,
  Route,
  Link

} from "react-router-dom";
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
import logo from '../assets/BABstorelogo.png'

const NavBar = () => {
  const {state} = useContext(LoginContext);
  const { totalItem  } = useCartContext()
  return (
        <>  
        <div  className="navbar">
          <nav>
            <ul>
              <li>
              <Link to="/">
              <img src={logo} alt="Logo" />
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
              <li key={totalItem} className="nav_items active">
                <Link  to="/cart/">
                  <img  src={carticon}
                 style={{height:"20px",width:"30px"}}
                  alt="Cart"/>
                    <span className='noti_count'>{totalItem}</span>
                  </Link>
              </li>
              <li className="nav_items active">
                <Link  to="/logout">Logout</Link>
              </li>
              </>
             
            }
            </ul>
          </nav>
          <Routes >
            <Route path="/" element={<Slider />} />
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