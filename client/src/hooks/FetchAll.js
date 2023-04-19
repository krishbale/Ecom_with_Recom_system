import  { useState,useEffect } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Fetchallproducts = (url,id) => {
    const navigate = useNavigate();
    const [loading,isloading] = useState(true);
    const [allproducts,setAllproductss] = useState([])
   

    useEffect(() => {
        const fetchData = async () => {
            try{
                isloading(true)
                const { data } = await axios.get(url);
                
               
                let products =  data.data ? data.data: data.recomdata
                // console.log(products);
                setAllproductss(products);

                
                if(Array.isArray(products)){
                    isloading(false);
                    // console.log(products)
                 
                    

                }
                // const originalArray = [{ contentId: 1 }, { contentId: 2 }, { contentId: 3 }, ... , { contentId: 50 }];

// Randomly select 5 elements from the original array




              
            }catch(e){
                console.log(e.response.data)
                if(e.response.status === 401){
                    navigate('/login');
                   }
                
             
                
            }
        };
        fetchData();
    }, [id])
  return {allproducts,loading};
  
}
export  { Fetchallproducts  };
