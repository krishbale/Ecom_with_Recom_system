import  { useState,useEffect } from 'react'

import axios from 'axios';

const Fetchallproducts = () => {
    const [loading,isloading] = useState(true);
    const [allproducts,setAllproductss] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                isloading(true)
                const { data } = await axios.get('/products');
                let products = data.data
                setAllproductss(products);
                
                if(Array.isArray(products)){
                    isloading(false);
                    console.log(products)
                    

                }
               
            }catch(e){
                console.log(e);
                
            }
        };
        fetchData();
    }, [])
  return {allproducts,loading};
  
}
export  { Fetchallproducts  };
