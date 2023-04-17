import React,{useContext, useState} from 'react'
import PersonIcon from '@mui/icons-material/Person';

// import {  useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  LoginContext } from '../App';
import Link from '@mui/material/Link';
import { NavLink ,useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
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
            window.alert(`Login Successfull`);
            dispatch({type:"USER",payload:"true"})
            history('/')
           
          }
    
    
    
    
        } catch (error) {
          console.log(error);
    
        }
    
      }
  return <>


   <Container component="main" maxWidth="xs">
     <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
 
   
 
{/* 
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
      
     
    </section>  */}
   
   
        </>
  
}

export default Login