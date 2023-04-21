import React,{createContext, useEffect, useReducer,} from 'react';
import { initialState,reducer } from './reducer/useReducer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
  
  <LoginContext.Provider value={{state,dispatch}}>
  <NavBar />
  <Footer />
  </LoginContext.Provider>

    
  );
}

export default App;
