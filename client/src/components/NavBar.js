import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "../styles/NavBar.css";
import Slider from "../components/Slider"
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Logout from '../pages/Logout'

const NavBar = () => {
  return (
    <>  

      <Router >
        <div className="navbar">
          <nav>
            <ul>
              <li>logo</li>
            </ul>
            <ul>
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
              <li className="nav_items active">
                <Link to="/logout">logout</Link>
              </li>
            </ul>
          </nav>
          <Routes >
            <Route path="/" element={<Slider />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default NavBar