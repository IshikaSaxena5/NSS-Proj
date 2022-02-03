import React from 'react';
import { useState,useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import Phone from '../photos/phone.jpeg';
 import Email from '../photos/email.png';
 import Address from '../photos/address.jpeg';
import img1 from '../photos/home-1.jpeg';
import img2 from '../photos/home-2.jpeg';
import img3 from '../photos/imgage1.JPG';
import drill from '../photos/drill.JPG';
import youthparliament from '../photos/youthparliament.JPG';
import profile from '../photos/profile.jpeg';
import nc1 from '../photos/nc1.JPG'

const Aboutus = () => {
  const [userData,setUserData]=useState({});
  const history = useHistory();
  const callAboutPage = async()=>{
     try{
       const res = await fetch('/aboutme',{
       method:"GET",
       headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
       },
       Credentials:"include"
     });

     const data = await res.json();
     console.log(data);
     if(!res.status===200){
        const error = new Error(res.error);
        throw error;
     }

     }catch(err){
       console.log(err);
       history.push('/login');
     }
  }
  useEffect(() => {
    callAboutPage();
  
  }, []);
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
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={img3} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img  src={img2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img src={img1} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    {/* <span class="sr-only">Previous</span> */}
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    {/* <span class="sr-only">Next</span> */}
  </a>
</div>


<div className="nss-info">
  <h1 className='info-heading'>nss history</h1>
    <h5>
    The National Service Scheme (NSS) is an Indian government sector public service program conducted by the Ministry of Youth Affairs[1]
     and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed
      at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities 
      and at +2 level working for a campus-community (esp. Villages) linkage.

    </h5>
</div>



<div className="events">
  <h1 className='events-header'>nss events</h1>
<div className="row ">
  <div className="col-lg-4 col-md-2 col-sm-1 event-images">
    <img className="event-img" src={drill} alt="" />
    <div className="event-info">
      <a href='/nukarnatak' ><h4>republic day</h4></a>
      
    </div>

  </div>
  <div className="col-lg-4 col-md-2 col-sm-1 event-images">
    <img className="event-img" src={nc1} alt="" />
    <div className="event-info">
     
    <a href='/nukarnatak' ><h4>NSS CAMP</h4></a>
    </div>

  </div>
  <div className="col-lg-4 col-md-2 col-sm-1 event-images">
    <img className="event-img" src={youthparliament} alt="" />
    <div className="event-info">
    <a href='/nukarnatak' ><h4>YOUTH PARLIAMENT</h4></a>
    </div>

  </div>
</div>
</div>



<div className="team">
  <div className="members">
    <h1>nss team</h1>
  </div>

  <div className="coordinator">

  <div className="row">

  <div className="col-12">
  
  <div className="card">
  <img src={profile} className="card-img-top core-img" alt="..."/>
  <div className="card-body cardBody">
  <h5 className="card-title">coordinator</h5>
  </div>
  </div>
    </div>
  </div>
    
  </div>
  
  <div className="core">
    <div className="row cradRow">
    <div className="col-lg-4 col-md-2 col-sm-1">

<div class="card">
<img src={profile} class="card-img-top" alt="..."/>
<div class="card-body cardBody">
<h5 class="card-title">Head</h5>

</div>
</div>

</div>

<div className="col-lg-4 col-md-2 col-sm-1">

<div class="card">
<img src={profile} class="card-img-top" alt="..."/>
<div class="card-body cardBody">
<h5 class="card-title">Head</h5>

</div>
</div>

</div>
<div className="col-lg-4 col-md-2 col-sm-1">

<div className="card">
<img src={profile} className="card-img-top core-img" alt="..."/>
<div className="card-body cardBody">
<h5 className="card-title">Head</h5>

</div>
</div>

</div>
<div className="col-lg-4 col-md-2 col-sm-1">

<div className="card">
<img src={profile} className="card-img-top core-img" alt="..."/>
<div className="card-body cardBody">
<h5 className="card-title">Head</h5>

</div>
</div>

</div>
<div className="col-lg-4 col-md-2 col-sm-1">

<div className="card">
<img src={profile} className="card-img-top core-img" alt="..."/>
<div className="card-body cardBody">
<h5 className="card-title">Head</h5>

</div>
</div>

</div>
<div className="col-lg-4 col-md-2 col-sm-1">

<div className="card">
<img src={profile} className="card-img-top core-img" alt="..."/>
<div className="card-body cardBody">
<h5 className="card-title">Head</h5>

</div>
</div>

</div>
<div className="col-lg-4 col-md-2 col-sm-1">

<div className="card">
<img src={profile} className="card-img-top core-img" alt="..."/>
<div className="card-body cardBody">
<h5 className="card-title">Head</h5>

</div>
</div>

</div>
    </div>
  </div>

</div>


<div className='about-contact-form'>
        <h1>Contact Us</h1>
      <div className='footer-div'>
              <div className='ac-row'>
                <div className='about-col'>
                    <div className='about-contact_info_item'>
                       <img src={Phone} alt="phone" className="image"/>
                       <span>
                       <div className='about-contact_info_title'>
                             Phone
                        </div>
                         <div className='about-contact_info_text'>
                              +91-111-348-237
                          </div>
                  </span>
                 </div>
                    </div>
                     <div className='about-col'>
                       <div className='about-contact_info_item'>
                       <img src={Email} alt="email" className="image"/>
                          <span>
                          <div className='about-contact_info_title'>
                            Email
                          </div>
                          <div className='about-contact_info_text'>
                              ishikasaxena@gmail.com
                          </div>
                          </span>
                       </div>
                   </div>
                   <div className='about-col'>
                       <div className='about-contact_info_item '>
                          <img src={Address} alt="address" className="image"/>
                          <span>
                          <div className='about-contact_info_title'>
                            Address
                          </div>
                          <div className='about-contact_info_text'>
                               South Delhi
                           </div>
                           </span>
                        </div>
                    </div>
                 </div>
         <div className='about-contact_form'>
             <div className='about-contact-details'>
             <h2>Get In Touch</h2>
                 <form method="POST" className='about-contact-inputs'>
                <label for="name"><i class="fas fa-user"></i>
                     <input type="text" name="name"
                      value={userData.name} 
                     onChange={handleInputs}
                     placeholder="name" required />
                     </label> 
                     <label for="email"><i class="fas fa-envelope"></i>
                     <input type="email" name="email"
                     value={userData.email}
                     onChange={handleInputs}
                     placeholder="Email" required/>
                     </label>
                     <label for="phone"><i class="fas fa-mobile"></i>
                     <input type="number" name='phone'
                      value={userData.phone} 
                     onChange={handleInputs}
                     placeholder="number" required/>
                     </label>
                 </form>
                 <form method='POST' className='text-area'>
                 <textarea name='message'
                 value={userData.message}
                 onChange={handleInputs}
                  rows="5" cols="70" placeholder="Message"/>
                 </form>
                   <button type="submit" class="btn btn-primary"
                   onClick={contactForm}>Send Message</button>
             </div>
         </div>
         </div>
         </div> 



<footer className="footer" id="About">
        <div class="text-center py-5 ">
            <h2 class="py-3 ">Thanks for visitng the website </h2>
            <div class="mx-auto heading-line "></div>
        </div>
        <div class="container ">
            <div class="row mb-3 ">
                <div class="col-lg-8 offset-lg-2 text-center ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla aliquet est nec aliquet. Cras convallis ultrices sem, id cursus tellus varius. </p>
                    <div class="justify-content-center media">
                        <i class="fab fa-facebook fa-2x "></i>
                        <i class="fab fa-twitter fa-2x "></i>
                        <i class="fab fa-instagram fa-2x "></i>
                        <i class="fab fa-whatsapp fa-2x "></i>
                        

                    </div>
                </div>
            </div>
            <div class="copyright text-center py-3 border-top text-light ">
                <p>&copy; Copy Right Sports Time</p>

            </div>
        </div>
    </footer>
</>
  );
};

export default Aboutus;
