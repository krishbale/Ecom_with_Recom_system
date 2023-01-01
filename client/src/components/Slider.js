import '../styles/Slider.css'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import cart from '../assets/cart.svg'

function Slider() {
  const [products, setProducts] = useState([]);
  function handleproducts(id){
  console.log(id);

   
  }
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get('/products');
      setProducts(data.data);

      console.log(data);
    };
    fetchdata();
  }, []);
  // console.log(products.data)

  return (
    <>
      <h1>All Product</h1>
      <div className='productitem'>
        {products.map((product) => {
          const { id, title, price,   image, rating,  } = product;
          return (
            <div className='card' key={id}>
              <div className='item'>
              <Link to={`/details/${id}`}>
                <div className='image'>
                  <img src={image} alt="image" />
                  <div className="overlay">
                <div className="learnmore">
                  <h3>Learn More</h3>
                </div>
              </div>
                </div>
                </Link>
                <div className='des'>
                  <h3>{title.slice(0, 25)}</h3>
                  <span>
                    <div>
                      <h5>Price:{price}</h5>
                      <h5>rating:{rating.rate}</h5>
                    </div>
                    <div>
                    <button >
                    <img src={cart} alt="Add to Cart " style={{height:"25px",width:'30px'}} />

                    </button>
                 
                    </div>
                  </span>

                </div>
              </div>
            </div>

          )
        })}
      </div>
    </>
  )
}

export default Slider


