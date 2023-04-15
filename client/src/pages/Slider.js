import '../styles/Slider.css'
import { useState } from 'react'
import babcover from '../assets/babstore.jpg'
import { Fetchallproducts } from '../hooks/FetchAll';
import LoadingAnimations from '../components/LoadingAnimations';
import Card from '../components/Card';
import Searchistory from './Searchistory';
function Slider() {
  const {allproducts ,loading} = Fetchallproducts('/products');
 const [title,setTitle] = useState('New Arrivals');
 const [query,setQuery] =useState('');
 const [searchHistory,setSearchHistory] = useState([]);
 const [filtered , setFiltered] = useState([])
 const [hidemenu,sethidemenu] = useState(false);


 //function for search hanlde
   const handleSearch =  (e) => {
    sethidemenu(true);
    
   
    const results = allproducts.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results)

      // setSearchHistory([...searchHistory,query])
      // console.log(searchHistory);
   }
   
   const handleSearchHistory = () => {
    // sethidemenu(false);
    setSearchHistory([...searchHistory, query])

    //  console.log(searchHistory);
   }
  

   //for loading animations
  if(loading){
return(
  <LoadingAnimations/>
)
  }

  //for filtering products according to category
 const filteredProduct = (cat)=>{
 

  const updatedList = allproducts.filter((x)=>x.category === cat)
  setFiltered(updatedList)
  setTitle(cat);
  sethidemenu(true);
 }
//rendering output
  return (
    <> 
    <section className="announcement">
      <input placeholder='Search'  className='search' type="text" 
       onChange={(e) =>  [setQuery(e.target.value),handleSearch()]}  />



          
      <>
        
        
        
            <Searchistory searchHistory={searchHistory} />
            
          
        
      </>
    )
    <button onClick={handleSearchHistory}>Search</button>

    </section >

    <section className={`slider_section ${hidemenu ? ' hide' : ''}`} >
    
      <div className="category center">
      <ul>
         <button className='categories'  onClick={()=>setFiltered(allproducts)}>All</button>
        <button  className='categories' onClick={()=>filteredProduct('watch')}>Watch</button>
        <button className='categories' onClick={()=>filteredProduct("laptop")}>Laptop</button>
        <button className='categories' onClick={()=>filteredProduct("electronics")}>Electronics</button>
         <button className='categories' onClick={()=>filteredProduct("mobile")}>Mobile</button>
         {/* <button className='categories' onClick={()=> showsearchhistory(true)}>showsearchhistory</button> */}

     

      </ul>
       
      
        
        
       
       
        {/* <img className='section_img'  src={babcover} alt="babcover" /> */}
        
      </div>
      <div className ="slider_image">
    
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMCAsWzhp3I3IuBGC2yfrwt7fWQGoojND9NCs83ubglg6XhKAoberQ4rj_chbBzXJVhQ&usqp=CAU"
     alt ="Ecommerce image" /> */}
  </div>
     
    </section>
    
    <div className="product_section  center">{title}</div>
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


