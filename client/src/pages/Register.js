import React, {useState} from 'react'
// import { NavLink, useNavigate } from 'react-router-dom';
// import  loginpic  from '../assets/avatarlogin.png';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import signpic from "../images/signup.svg";
import {  useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const Register = () => {
    const   history = useNavigate();
    const [user,setUser] = useState({
        username:"",password:""
      });
       
  const handleInputs = (e) => {
    let name, value;
   

    name = e.target.name;
    value = e.target.value;
    setUser({ ...user,[name]:value})
   
  }
  
  const PostData = async(e) =>{
    e.preventDefault();

    const { username , password } = user; 
  try {
    const res = 
    await fetch("/register",{
    method : "POST",
    headers: {
      "Content-Type" : "application/json"},
    body: JSON.stringify({
        username , password
      

    })

   });
   //logic if success
    
   const data = await res.json();
   if(res.status === 422 || !data ){

    window.alert("Registeration failed")
   }else {  
    window.alert('Registeration successfull')
    history('/login')

   }
  }catch(error){

    console.log(error)
  }
  }
  return (
        <>
        
       <Container component="main" maxWidth="xs">
     <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register 
          </Typography>
          <Box component="form" onSubmit={PostData} noValidate sx={{ mt: 1 }}>
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
              onChange={handleInputs} 
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
              onChange={handleInputs} 
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
             Create Account
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {" Login "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
   
    </>
  )
}

export default Register