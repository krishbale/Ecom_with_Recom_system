
import * as React from "react";
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css';
const NavBar = () => {
  return (
    <>
  
      <li className="nav_items active">
        <NavLink className="nav_items__item" to="/">Home</NavLink>
       
      </li>
      <li className="nav_items">
      <NavLink className="nav_items__item" to="/about">About</NavLink>

      </li>
      <li className="nav_items">
      <NavLink className="nav_items__item" to="/contacts">COntact</NavLink>

      </li>
  <li className="nav_items">
  <NavLink className="nav_items__item" to="/login">Login</NavLink>

  </li>
  <li className="nav_items">
  <NavLink className="nav_items__item" to="/logout">logout</NavLink>

  </li>
  <li className="nav_items">
  <NavLink className="nav_items__item" to="/products">Products</NavLink>

  </li>
   


     
    </>
  )
}

export default NavBar