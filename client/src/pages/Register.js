import React, {useState} from 'react'

import InstantMessage from '../components/InstantMessage';
import { regexPassword,mailformat } from '../utils';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
  const [alert,setAlert] = useState(false);
  const [alertmsg,setAlertMsg] = useState('')
    const   history = useNavigate();

    const [user,setUser] = useState({
        username:"",password:""
      });
      const [errors,setErrors] = useState(false);
       
  const handleInputs = (e) => {
    let name, value;
   
    
    name = e.target.name;
    value = e.target.value;
    let iscorrectvalue = name === 'username' ? mailformat.test(value)
    :regexPassword.test(value);
    iscorrectvalue ? setErrors({...errors,[name]:false})
    :setErrors({...errors,[name]:true})    
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
    setAlertMsg("registeration failed")
    setAlert(true);
    // window.alert("Registeration failed")
   }else {
  setAlertMsg("Registeratin Successfull");
  // setAlert(true);
    // window.alert('Registeration successfull')
    history('/login')



   }
  //  setAlert(false);
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
            <PersonAddIcon />
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
              label="Email"
              name="username"
            error={errors.username}
            helperText={errors.username && "Any character other than white-space is allowed, length between 8 and 24."}

              autoFocus
              onChange={handleInputs} 
            />
            <TextField
              margin="normal"
              required
              fullWidth
              error={errors.password}
              helperText={errors.password && "Must Includes (a   upper ,lower ,number,special character) & 8 - 32 characters long"}
              name="password"
              label="Password"
              type="password"
              id="password"
              
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
            {alert ?  <InstantMessage message = {alertmsg} /> : `` }
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an Account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
        
       {/* <section className='signup bg-dark'>
    <div className='container mt-5 '>
    <div className='signup-content'>
    <div className='signup-form'>
      <h2 className='form-title'>Sign Up</h2>
      <form method='POST' className='register-form' >
      <div className='form-group '>
        <label htmlFor="username">
        <i className="zmdi zmdi-account material-icons-name bg-info"></i>
        </label>
        <input type="text" className='bg-dark' name="username" id="name" autoComplete='off'
          
          onChange={handleInputs} 
          placeholder='Your username'
        />
      </div>
     
      <div className='form-group'>
        <label htmlFor="password">
        <i className="zmdi zmdi-lock material-icons-password bg-info"></i>
        </label>
        <input type="text" name="password" id="password" autoComplete='off'
          
          onChange={handleInputs} className="bg-dark"
          placeholder='Your Password'
        />
      </div>
      <div className="form-group col-md-2 ">
     
     
    </div>
      <div className='form-group form-button'>
        <input type="submit" name="signup" id="signup" className='form-submit btn btn-outline-info' value="register"
        onClick={ PostData } /> 
      </div>
      </form>
      <div className='signup-image'>
        <figure>
       
        </figure>
        <Link to="/login" className="signup-image-link btn btn-outline-warning" >Back to Login Page</Link>
      </div>
    </div>
    </div>
    </div>
    </section> 
    */}
    </>
  )
}

export default Register