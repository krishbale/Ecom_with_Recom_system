import React from 'react'
import "../styles/Detail.css"
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Detail() {
  const [loading, isloading] = useState(true);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get('/products');
      setProducts(data.data);
      isloading(false)
    };
    fetchdata();
  }, []);
  let { id } = useParams()
  let productDetail = products.find(item => item.id == id)
  if (loading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <>
      
      <div className='detail'>

        <div className="image-container">
          <div className='image'>
          <img src={productDetail.image} />
          </div>
        
        </div>
        <div className="description">
          <div className='title'><h1>{productDetail.title}</h1></div>
          <div className='des'>
          <p>{productDetail.description}</p>
          </div>
          
          <span>
          <h3>Price:${productDetail.price}</h3>
          <button className='cartbutton'>Add to Cart</button>
          </span>
         
        </div>
      </div>

    </>


  )

}

export default Detail

