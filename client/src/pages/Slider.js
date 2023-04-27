import '../styles/Slider.css'
import { useState } from 'react'
import { Button } from '../components/Button';
import { Fetchallproducts } from '../hooks/FetchAll';
import LoadingAnimations from '../components/LoadingAnimations';
import Card from '../components/Card';

import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import SearchIcon from '@mui/icons-material/Search';

function Slider() {
  
  const {allproducts ,loading} = Fetchallproducts('/products');

 const [query,setQuery] =useState('');
 const [searchHistory,setSearchHistory] = useState([]);
 const [filtered , setFiltered] = useState([])
 const [hidemenu,sethidemenu] = useState(false);


 //function for search hanlde
   const handleSearch =  (e) => {
    
    
   
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
  setFiltered(updatedList);

  sethidemenu(true);

 }
//rendering output
  return (
    <> 
    <div className='section_slider' >
   

    <div  className="category"> 
   
 
  
 

    
  
     <div className="dropdown-content">       
            <button className='categories'  onClick={()=>setFiltered(allproducts)}>All</button>
            <button  className='categories' onClick={()=>filteredProduct('watch')}>Watch</button>
            <button className='categories' onClick={()=>filteredProduct("laptop")}>Laptop</button>
            <button className='categories' onClick={()=>filteredProduct("electronics")}>Electronics</button>
            <button className='categories' onClick={()=>filteredProduct("mobile")}>Mobile</button>  
            {/* <div className='searcharea'> */}
          <input placeholder='Search'  className='search' type="text"  
          onChange={(e) =>  [setQuery(e.target.value),handleSearch()]}  />
          {/* <Button>Search</Button> */}
          
    {/* </div> */}
            {/* <input placeholder='Search'  className='search' type="text"  
               onChange={(e) =>  [setQuery(e.target.value),handleSearch()]}  />          */}
     </div> 
   
 
   
    </div>
    
      
    
        
      
        
        
          <div className='productitem'>
       
            {filtered.map((product) => {
            
              return (
                
               <Card key={product.id} product={product} />
              )
            })}
          </div>
          <div className={`productitem ${hidemenu ? ' hide' : ''} `}>
         
         {allproducts.map((product) => {
         
           return (
             
            <Card key={product.id} product={product} />
           )
         })}
       </div>
    </div>
   
{/*             
                  <Searchistory searchHistory={searchHistory} /> 
                  <button onClick={handleSearchHistory}>
                  <SearchIcon />
                 </button> */}

             
     

  
    {/* ${hidemenu ? ' hide' : '' */}
   

   
    </>
  )
}

export default Slider


