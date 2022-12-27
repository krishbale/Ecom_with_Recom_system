import { Link } from "@mui/material";
import * as React from "react";
import '../styles/NavBar.css';
const NavBar = () => {
  return (
    <>
  
      <li className="nav_items active">
        <Link className="nav_items__item" to="/">Home</Link>
       
      </li>
      <li className="nav_items">
      <Link className="nav_items__item" to="/about">About</Link>

      </li>
      <li className="nav_items">
      <Link className="nav_items__item" to="/contacts">COntact</Link>

      </li>
  <li className="nav_items">
  <Link className="nav_items__item" to="/login">Login</Link>

  </li>
  <li className="nav_items">
  <Link className="nav_items__item" to="/logout">logout</Link>

  </li>
  <li className="nav_items">
  <Link className="nav_items__item" to="/products">Products</Link>

  </li>
   


     
    </>
  )
}

export default NavBar