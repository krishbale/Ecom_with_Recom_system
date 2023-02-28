import '../styles/Slider.css'
import { useState } from 'react'
import { Fetchallproducts } from '../hooks/FetchAll';
import LoadingAnimations from '../components/LoadingAnimations';
import Card from '../components/Card';
function Slider() {
  const {allproducts ,loading} = Fetchallproducts('/products');
 const [title,setTitle] = useState('New Arrivals');
 const [query,setQuery] =useState('');
 const [filtered , setFiltered] = useState([])
   const handleSearch =  () => {
    const results = allproducts.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results)
   }
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
      <input typeof='search' id='search' name='search' className='search' type="text" 
       onChange={(e) =>  [setQuery(e.target.value),handleSearch()]} placeholder='Search' />
  
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
          return (
           <Card key={product.id} product={product} />
          )
        })}
      </div>
    </>
  )
}

export default Slider


