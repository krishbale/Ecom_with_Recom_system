import React from 'react'
import "../styles/Detail.css"
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Detail() {
  const [loading,isloading] = useState(true);
  
    const [products ,setProducts]=useState([]);
    useEffect(() => {
     const fetchdata = async () => {
       const { data } = await axios.get('/products');
       setProducts(data.data);
       isloading(false)
     };
     fetchdata();
   }, []);
   let {id}= useParams()
     let productDetail = products.find(item=> item.id == id )
     if(loading){
      return <div className="page_loading">Loading.....</div>;
     }
     
    return(
      <>
      <h1>{productDetail.title}</h1>
      <div className='detail'>
      <h1>{productDetail.id}</h1>
      <div className="image">
        <img src={productDetail.image}/> 
      </div>
      <div className="description">
        <h1>{productDetail.title}</h1>
        <p>{productDetail.description}</p>
        <h3>{productDetail.price}</h3>
      </div>
      </div>

      </>


    )
 
}

export default Detail

