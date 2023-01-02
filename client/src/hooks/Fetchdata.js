import  { useState,useEffect } from 'react'

import axios from 'axios';

const Fetchsingledata = (id) => {
    const [loading,isloading] = useState(true);
    const [allproducts,setAllproductss] = useState([])
    const[data,setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try{
                isloading(true)
                const { data } = await axios.get('/products');
                let products = data.data
                setAllproductss(products);
                let singleproduct = products.find(item => item.id === id)
                setData(singleproduct);
                isloading(false);
            }catch(e){
                console.log(e);
                
            }
        };
        fetchData();
    }, [])
  return {allproducts, data,loading};
  
}
export  { Fetchsingledata  };
