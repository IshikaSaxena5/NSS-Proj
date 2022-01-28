import React, { useState } from 'react'
import { Navlink,useHistory } from 'react-router-dom';
import signpic from "../photos/signup.jpeg"
const Login = () => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
const loginUser = async(e)=>{
  e.preventDefault();
  const res = await fetch('/login',{
    method:"POST",
    headers:{
      "content-Type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })
  });
  const data = res.json();
  if(data.json===400||!data){
    window.alert("Invalid Credentials");
  }
  else{
    window.alert("Login Succesfull");
    console.log("Successful");
    history.push("/about");
  }
}
    return (
        <>
           <h2 className='heading'>Sign In Form</h2>
           <section className='login'>
              <div className='container mt-5'>
                  <div className='signup-content'>
                  <div className='login-form'>
                  <div className='login-pic-refer'>
                        <div>
                        <img src={signpic} alt="signinpic"/>
                        </div>
                        <div className='moveto'>
                        <a  href="/Signup">Not A Member</a>
                        </div>
                        </div>
                        <form method="POST">
                        <div class="loginform-group">
                          <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInput" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter email"/><ion-icon name="mail-sharp"></ion-icon>
                          </div>
                          <div>
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInput" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Password"/>
                          </div>
                          <div className='btn-div'>
                          <button type="submit" className="btn btn-primary" onClick={loginUser}>Submit</button>
                          </div>
                          </div>
                        </form>
                        </div>
                        </div>     
                      </div>
           </section>
        </>
    )
}

export default Login