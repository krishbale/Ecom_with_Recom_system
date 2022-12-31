import React from 'react'
import '../styles/Login.css'
import {


  Link
} from "react-router-dom";
import avatar from '../assets/avatar.png'
const Login = () => {
  return (
    <>
      <div id="id01" class="modal">
  
  <form className="modal-content animate" action="/action_page.php" method="post">
    <div className="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
      <img src={avatar} alt="Avatar" className="avatar"/>
    </div>

    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>
        
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
    </div>

    <div className="container" style={{'background-color':'#f1f1f1'}} >
      <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot    <Link to="/">password?</Link></span>
    </div>
  </form>
</div>
    </>
  )
}

export default Login