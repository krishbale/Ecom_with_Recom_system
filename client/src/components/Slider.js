import '../styles/Slider.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
import cart from '../assets/cart.svg'
import { useCartContext } from '../context/Cartcontext'
import { Fetchallproducts } from '../hooks/FetchAll';
import Foryou from './Foryou';
import LoadingAnimations from '../pages/LoadingAnimations';
function Slider() {
 const [title,setTitle] = useState('New Arrivals');

  //addtocartbuttonlogic
  const {addtoCart} = useCartContext(); 
  const displayconsole= (title)=>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })


   }
 
//fetching data
  const {allproducts ,loading} = Fetchallproducts('/products');
  //
  const [filtered , setFiltered] = useState([])
  if(loading){
return(
  <LoadingAnimations/>
)
  }
  
  
 const filteredProduct = (cat)=>{
  
  const updatedList = allproducts.filter((x)=>x.category === cat)
  setFiltered(updatedList)
  setTitle(cat);
 }

  return (
    <> 
    <section className="announcement">
      <input className='search' type="text" placeholder='Search' />
    </section>
  
    <section className="slider_section">
    
      <div className="category center">
    
      

        <button className='categories'  onClick={()=>setFiltered(allproducts)}>All</button>
        <button  className='categories' onClick={()=>filteredProduct('watch')}>Watch</button>
        <button className='categories' onClick={()=>filteredProduct("laptop")}>Laptop</button>
        <button className='categories' onClick={()=>filteredProduct("electronics")}>Electronics</button>
        <button className='categories' onClick={()=>filteredProduct("mobile")}>Mobile</button>
      

      </div>

    
    </section>
    <div className="product_section  center"> {title}</div>
    
      <div className='productitem'>
      
  
        {filtered.map((product) => {
          const { id, title, price,  descriptions, image,   } = product;
          return (
            <div className='card' key={id}>
              <div className='item'>
              <Link to={`/details/${id}`}>
                <div className='image'>
                  <img src={image} alt="logo" />
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
                    </div>
                    <div>
                    <button  onClick={()=> [addtoCart(product),displayconsole(title)]}  className='cartbutton'>
                    <img src={cart} alt="Add to Cart " style={{height:"25px",width:'30px'}} />
                    </button>
                  

                   
                 
                    </div>
                  </span>

                </div>
              </div>
            </div>

          )
        })}
      
     
        <Foryou  allproducts= { allproducts } />

      </div>
    </>
  )
}

export default Slider


