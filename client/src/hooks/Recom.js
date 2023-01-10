import  { useState,useEffect } from 'react'

import axios from 'axios';

const Recomdata = (id) => {
    const [recomData,setRecomData] = useState({})
    const [loading,isloading] = useState(true)
  
    useEffect(() => {
        const fetchData = async () => {
            try{
                isloading(true);
                const { data } = await axios.get(`/getrecom/${id}`);
                let recom = data.data
               
                setRecomData(recom);
              console.log(recomData)
                if(typeof recom !== "undefined"){
                    isloading(false);
                    console.log(recom)
                }     
            }catch(e){
                console.log(e);
                
            }
        };
        fetchData();
    }, [id])
  return { recomData ,loading};
  
}
export  { Recomdata  };