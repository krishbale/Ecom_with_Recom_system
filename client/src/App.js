import React,{createContext, useEffect, useReducer,} from 'react';


import './App.css';
import Homepage from './pages/Homepage';
import { initialState,reducer } from './reducer/useReducer';

export const LoginContext = createContext({});
function App() {


  const [state,dispatch] = useReducer(reducer,initialState)
    
  const FetchUserAuth = async ()=>{
    try{
      const res = await fetch('/isAuth')
      
      
      if(!res.ok) {
        dispatch({type:'USER',payload:"false"})
       
      }
      // console.log(res);
   
       
    
    }catch(e){
      console.log(e);
      

    
    
      
    }
  }
useEffect(() => {
  


 FetchUserAuth()
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
