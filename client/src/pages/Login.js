import React,{useContext, useState} from 'react'
import {  LoginContext } from '../App';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { NavLink ,useNavigate } from 'react-router-dom';
const Login = () => {
  const {dispatch} = useContext(LoginContext);
    const history = useNavigate()
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
      
        e.preventDefault();
        try {
    
          const res =
            await
              fetch('/login',
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    username, password
    
                  })
                });
          const data = await res.json();
          if (res.status === 422 || !data) {
            window.alert("Invalid Credentials")
          }
          else
          {
            window.alert(`hello Viewer`)
            dispatch({type:"USER",payload:"true"})
            history('/')
           
          }
    
    
    
    
        } catch (error) {
          console.log(error);
    
        }
    
      }
  return <>


 
   
 

   <section className='sign-in bg-dark'>
      <div className='container mt-5'>
      <div className='signin-content'>
      <div className='signin-image bg-dark'>
        <figure>
          <img  height="100" width="75" alt="signpic" />
        </figure>
       
      </div>
      <div className='signin-form bg-dark'>
      <h2 className='form-title'>Log IN</h2>
      <form method='POST'
      className='register-form' id='register-form'>
      <div className=''>
      <div className='form-group  '>
        <label htmlFor="username">
        <i className="zmdi zmdi-account material-icons-name bg-info "></i>
        </label>
        <input type="text" name="username" id="name" autoComplete='off' 
          placeholder='Your Username' className='bg-dark text-white-50'
 
            
            onChange={(e) => setUserName(e.target.value)}
                   />
      </div>
      <div className='form-group  '>
        <label htmlFor="password">
        <i className="zmdi zmdi-lock material-icons-password bg-info"></i>
        </label>
        <input type="text" name="password" id="password" autoComplete='off' 
          placeholder='Your Password' className='bg-dark text-white-50'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='form-group form-button '>
        <input type="submit" 
        onClick={loginUser}
         name="login" id="login" className='form-submit btn btn-outline-success' value="Login" />
         <p className='bg-dark' >
          Do you want to register a new account ? 
         </p>
         <Link to="/signup" className="signup-image-link btn  btn-outline-info" >Create an account</Link>
      </div>
      </div>
      </form>
     
      </div>
      </div>
      </div>
      
     
    </section> 
   
   
        </>
  
}

export default Login