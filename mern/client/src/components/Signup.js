import React from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import signpic from "../photos/signup.jpeg"
import { useState } from "react";

const Signup = () => {

  const history=useHistory();
const [user,setUser]=useState({
name:"",
email:"",
phone:"",
work:"",
password:"",
cpassword:""
})
let name,value;
const handleInputs=(e)=>{
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});

}

const PostData= async(e)=>{
  e.preventDefault();
  const {name,email,phone,work,password,cpassword}=user;

  const res=await fetch("/register",{
      method:"POST",
      headers:{
          "Content-Type" : "application/json"
      },
      body: JSON.stringify({
          name,email,phone,work,password,cpassword  
      })

  })

  const data = await res.json();
  if(data.status===4222||!data){
      window.alert("invalid");
      console.log("invalid");
  }
  else{
      window.alert("sucessful");
      console.log("sucessful");

      history.push("/login");
  }



}
const CallLogin=()=>{
  history.push('/login');
}

return (
<>

<h2 className='heading'>Student Registaration Form</h2>
<section className='signup'>
              <div className='container'>
                  <div className='signup-content'>
                  
                      <div className='signup-form'>
      <form method="POST">
          <div className="row">
            
              <div className="col-10">
                  <label for="fname">Name:</label>
              </div>
              <div className="col-90">
                  <input type="text" id="fname" name="name" 
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Enter your first name"/>
              </div>
          </div>
          <div className="row">
              <div className="col-10">
                  <label for="email">Email:</label>
              </div>
              <div className="col-90">
                  <input type="email" id="email" name="email"
                   value={user.email}
                   onChange={handleInputs}
                  placeholder="it should contain @,."/>
              </div>
          </div>
          <div className="row">
              <div className="col-10">
                  <label for="mobile">Phone:</label>
              </div>
              <div className="col-90">
                  <input type="tel" id="mobile" name="phone"
                   value={user.phone}
                   onChange={handleInputs}
                  placeholder="only 10 digits are allowed"/>
              </div>
          </div>

          <div className="row">
              <div className="col-10">
                  <label for="fname">Work:</label>
              </div>
              <div className="col-90">
                  <input type="text" id="work" name="work" 
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Enter your work"/>
              </div>
          </div>
          <div className="row">
              <div className="col-10">
                  <label for="password">Password:</label>
              </div>
              <div className="col-90">
                  <input type="password" id="password"
                   value={user.password}
                   onChange={handleInputs}
                  name="password" maxlength="8"/>
              </div>
          </div>
          <div className="row">
              <div className="col-10">
                  <label for="password">CPassword:</label>
              </div>
              <div className="col-90">
                  <input type="password" id="Cpassword"
                   value={user.cpassword}
                   onChange={handleInputs}
                  name="cpassword" maxlength="8"/>
              </div>
          </div>
          <div className="btn-div">
              <button type="submit" className='btn btn-primary' value="signup" value="register" onClick={PostData}>Register</button>
          </div>  
          </form>
          <div className='pic-refer'>
                        <div>
                        <img src={signpic} alt="signpic"/>
                        </div>
                        <div className='moveto'>
                        <button onClick={CallLogin}>Already A Member</button>
                        </div>
                        </div>
          </div>
      </div>
      </div>
</section>
</>

)
};

export default Signup;