import React,{createContext, useEffect, useReducer, useState} from 'react';

import './App.css';
import Homepage from './pages/Homepage';
import { initialState,reducer } from './reducer/useReducer';

export const LoginContext = createContext({});
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
    

useEffect(() => {
  const fetchUserAuth =async ()=>{
        try{
          const res = await fetch('/isAuth')
          if(!res.ok) 
          dispatch({type:'USER',payload:"false"})
        
        }catch(error){
         
          console.log('There was an error fetch auth',error)
          
        }
      }


 fetchUserAuth()
}, [])
  return (
  <div className="container">
  <LoginContext.Provider value={{state,dispatch}}>

  < Homepage />
  </LoginContext.Provider>

  </div>
    
  );
}

export default App;
