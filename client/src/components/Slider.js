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
  const [filtered , setFiltered] = useState([])
    useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get('/products');
        setProducts( await data.data);
        setFiltered( await data.data);
    };
    fetchdata();
  }, []);
  
  // console.log(products.data)
 const filteredProduct = (cat)=>{
  const updatedList = products.filter((x)=>x.category == cat)
  setFiltered(updatedList)
 }

  return (
    <> 
    <section className="announcement"><h4>Anouncement Section !!!</h4></section>
    <section className="slider_section"></section>
     <div className="product_section  center"> Latest Products </div>
      <div className="category center">
        <button active onClick={()=>setFiltered(products)}>all</button>
        <button onClick={()=>filteredProduct('jewelery')}>jewelery</button>
        <button onClick={()=>filteredProduct("men's clothing")}>men's clothing</button>
        <button onClick={()=>filteredProduct("electronics")}>electronics</button>
        <button onClick={()=>filteredProduct("women's clothing")}>women's clothing</button>

      </div>
      <div className='productitem'>
        {filtered.map((product) => {
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
                  <h3>{title.substring(0, 18)}...</h3>
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


