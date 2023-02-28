import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {  LoginContext } from '../App';
import LoadingAnimations from '../components/LoadingAnimations';
const Logout = () => {
    const {state,dispatch} = useContext(LoginContext);
    const history = useNavigate();
    //promises

    useEffect(() => {
    fetch('/logout',
    {
        method:"GET",
        headers:
        {
            Accept:"application/json",
            "Content-Type":"application/json"

        },credentials:"include"
        
    }).then((res)=>{

        history('/',{ replace:true });
        dispatch({type:"USER",payload:"false"})
        if(res.status !== 200){
            const error = new Error(res.error);
            throw error;
        }



    }).catch((err)=>{
        console.log(err)

    });
    }, [])
    
  return (
    <>
    <LoadingAnimations/>
    </>
  )
}

export default Logout