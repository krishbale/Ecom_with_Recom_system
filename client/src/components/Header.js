import React, { useContext } from 'react'
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Fetchallproducts } from '../hooks/FetchAll';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

import { Button, Drawer, Icon } from '@mui/material';
import logo from '../assets/black.png'
import {  LoginContext } from '../App';
import { Link } from "react-router-dom";
import { useCartContext } from '../context/Cartcontext';
import Badge from '@mui/material/Badge';
import { useState } from 'react'
import Cartui from './Cartui';
import Card from './Card';
function Header() {  
  const {username} = useContext(LoginContext);
  // console.log(username);
  const [filtered , setFiltered] = useState([])
  // const {allproducts ,loading} = Fetchallproducts('/products');

  // console.log(username);
  const [cartOpen, setCartOpen] = useState(false);
    const { totalItem  } = useCartContext();
    const [query,setQuery] =useState('');
    const handleSearch =  (e) => {
    
    
   
      // const results = allproducts.filter(item =>
      //   item.title.toLowerCase().includes(query.toLowerCase())
      //   );
      //   setFiltered(results)
  
        // setSearchHistory([...searchHistory,query])
        // console.log(searchHistory);
     }
  return (
    <div className="header">
      <Link to={'/'}>
 <img
          className="header__logo"
          src={logo}
          // height={70}
          // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
       
    
      <div className="header__search">
        <input placeholder='Search'  onChange={(e) =>  [setQuery(e.target.value),handleSearch()]} className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      
     
        <Link to={'/allproducts'}>
        <div className="header__option">
            <span className="header__optionLineOne">All Products</span>
            <span className="header__optionLineTwo">& Categories</span>
          </div>
        </Link>
      
        

        <Link to={'/checkoutpage'}>
        <div className="header__option">
            <span className="header__optionLineOne">Check out</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
         
        
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}> 
        <Cartui  />
        </Drawer>

        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

        
          <div className="header__optionBasket">
            {/* <ShoppingBasketIcon /> */}
             <Button style={{
              color:'white'

                    }}
              onClick={() => setCartOpen(true)}>
             <ShoppingCartSharpIcon />
            <span className="header__optionLineTwo header__basketCount">
              {totalItem}
         
            </span>
            
                
                  </Button>
          </div>
        
      </div>
      {/* {filtered.map((product) => {
            
            return (
              
             <Card key={product.id} product={product} />
            )
          })} */}
    </div>
  );
}

export default Header;