
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Productpage from './pages/Productpage';
import Login from './pages/Login';
import Logout from './pages/Logout';

import Footer from './pages/Footer';
import './App.css';

import NavBar from './pages/NavBar';

function App() {
  return (
    <>
    <>
    
     
      
        <BrowserRouter>
       <NavBar/>
        <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/products" element={<Productpage />} />
           <Route path="/login" element={<Login />} />
           <Route path="/logout" element={<Logout />} />
        </Routes>
        </BrowserRouter>
        <Footer/>

     
    </>

    </>
    
  );
}

export default App;
