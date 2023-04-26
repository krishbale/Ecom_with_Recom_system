import React from "react";
import Item from '../components/Item';
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import imagedata from '../components/imagedata';
import { Carousel } from 'react-responsive-carousel';
import Slider from "./Slider";
import '../styles/Home.css'
import Product from "../components/Product";
import Card from "../components/Card";
import { Fetchallproducts } from '../hooks/FetchAll';
function    Home() {
  const {allproducts ,loading} = Fetchallproducts('/products');
  return (
    <div className="home">
      <div className="home__container">;
     
        <img
          className="home__image"
          // src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            src="https://icms-image.slatic.net/images/ims-web/07342e59-6d96-4629-85ef-d78e9a3c34c0.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
     
     <div className="home__row">
     
              
     <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <Slider />

      </div>
    </div>
    );
};

export default Home;