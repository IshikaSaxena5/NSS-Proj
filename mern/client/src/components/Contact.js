import React, {useState,useEffect} from 'react'
import Phone from '../photos/phone.jpeg';
import Email from '../photos/email.png';
import Address from '../photos/address.jpeg';

const Contact = () => {
    const [userData,setUserData]=useState({});
   const callContact = async()=>{
      try{
        const res = await fetch('/getdata',{
        method:"GET",
        headers:{
           "Content-Type":"application/json"
        }
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);
      if(!res.status===200){
         const error = new Error(res.error);
         throw error;
      }

      }catch(err){
        console.log(err);
      }
    }
    useEffect(() => {
        callContact();
      
      }, []);
      const handleInputs = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData,[name]:value});
      }
      const contactForm = async(e)=>{
        e.preventDefault();
        const {name , email , phone , message}= userData;
        const res = await fetch('/contact',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name , email , phone , message
          })
        });
        const data = await res.json();
        if(!data){
          console.log("message not send");
        }
        else{
          alert("Message Send");
          setUserData({...userData,message:""});
        }
      }


    return (
        <>
          <div className='contact_info'>
              <div className='container-fluid'>
                  <div className='row'>
                     <div className='col'>
                         <div className='contact_info_item'>
                            <img src={Phone} alt="phone" className="image"/>
                            <span>
                            <div className='contact_info_title'>
                              Phone
                            </div>
                            <div className='contact_info_text'>
                                +91-111-348-2372
                            </div>
                            </span>
                         </div>
                     </div>
                     <div className='col'>
                         <div className='contact_info_item'>
                            <img src={Email} alt="email" className="image"/>
                            <span>
                            <div className='contact_info_title'>
                              Email
                            </div>
                            <div className='contact_info_text'>
                                ishikasaxena@gmail.com
                            </div>
                            </span>
                         </div>
                     </div>
                     <div className='col'>
                         <div className='contact_info_item '>
                            <img src={Address} alt="address" className="image"/>
                            <span>
                            <div className='contact_info_title'>
                              Address
                            </div>
                            <div className='contact_info_text'>
                                South Delhi
                            </div>
                            </span>
                         </div>
                     </div>
                  </div>
              </div>
          </div>  
          <div className='contact_form'>
          
              <div className='contact-details'>
              <h2>Get In Touch</h2>
                  <form method="POST" className='contact-inputs'>
                      <input type="text" name="name"
                       value={userData.name} 
                      onChange={handleInputs}
                      placeholder="name" required/>
                      <input type="email" name="email"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Email" required/>
                      <input type="number" name='phone'
                       value={userData.phone} 
                      onChange={handleInputs}
                      placeholder="number" required/>
                  </form>
                  <form method='POST'>
                  <textarea name='message'
                  value={userData.message}
                  onChange={handleInputs}
                   rows="5" cols="79" placeholder="Message"/>
                  </form>
                    <button type="submit" class="btn btn-primary"
                    onClick={contactForm}>Send Message</button>
              </div>
          </div>
        </>
    )
}

export default Contact