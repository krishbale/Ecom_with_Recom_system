import '../styles/Slider.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

import { useCartContext } from '../context/Cartcontext'
import { Fetchallproducts } from '../hooks/FetchAll';
import ProductCard from './ProductCard';


function Slider() {

 const [title,setTitle] = useState('Latest Products');

  //addtocartbuttonlogic
  const {addtoCart} = useCartContext(); 
  const displayconsole= (title)=>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })


   }
 
//fetching data
  const {allproducts ,loading} = Fetchallproducts();
  //
  const [filtered , setFiltered] = useState([])
  if(loading){
    return(
      <>
        <h1>Loading</h1>
      </>
    )
  }
 const filteredProduct = (cat)=>{
  
  const updatedList = allproducts.filter((x)=>x.category === cat)
  setFiltered(updatedList)
  setTitle(cat);
 }

  return (
    <> 
    <div className='container grid grid-filter-column'>
      <div >
{/* //filtersection */}

    <section className="slider_section">
    
      <div className="categorycenter">
    
      

        <button className='categories'  onClick={()=>setFiltered(allproducts)}>All</button>
        <button  className='categories' onClick={()=>filteredProduct('jewelery')}>Jewelery</button>
        <button className='categories' onClick={()=>filteredProduct("men's clothing")}>Men's clothing</button>
        <button className='categories' onClick={()=>filteredProduct("electronics")}>Electronics</button>
        <button className='categories' onClick={()=>filteredProduct("women's clothing")}>Women's clothing</button>
      

      </div>

    
    </section>

      </div>
      <section className='product-view--sort'>
        <div className='sort-filter'>
{/* //sort area */}
<section className="announcement">
      <input className='search' type="text" placeholder='Search' />
    </section>

        </div>
        <div className='main-product'>

{/* //render data */}
  
<div className="section">
    <div className='container'>
    <div className='grid grid-three-column'>
    {
          filtered.map((product)=>
          
             <ProductCard product={product}/> 
          )
          
        
        }
    </div>
     </div>
    
     
     </div>

        </div>
      </section>
    </div>
  
  
  
  
        {/* {filtered.map((product) =>  */}
        
          {/* return (
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
                      <h5>rating:{rating.rate}</h5>
                    </div>
                    <div>
                    <button  onClick={()=> [addtoCart(product),displayconsole(title)]}  >
                    ADD ITEM 
                    </button>
                  

                   
                 
                    </div>
                  </span>

                </div>
              </div>
            </div>

          ) */}
        {/* } */}
        
        
      
      

     
    </>
  )
}

export default Slider


