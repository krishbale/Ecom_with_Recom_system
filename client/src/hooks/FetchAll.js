import  { useState,useEffect } from 'react'

import axios from 'axios';

const Fetchallproducts = (url) => {
    const [loading,isloading] = useState(true);
    const [allproducts,setAllproductss] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                isloading(true)
                const { data } = await axios.get(url);
               
                let products =  data.data ? data.data: data.recomdata
                console.log(products);
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
