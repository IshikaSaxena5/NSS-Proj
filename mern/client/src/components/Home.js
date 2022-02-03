import React ,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom';
 import wallpaper from '../photos/NSS_Hand_Logo.jpg'
const Home = () => {
  const history = useHistory();
  const [userName,setUserName]=useState('');
  const [ show , setShow] = useState(false);
 const userHomePage = async()=>{
    try{
      const res = await fetch('/getdata',{
      method:"GET",
      headers:{
         "Content-Type":"application/json"
      }
    });

    const data = await res.json();
    console.log(data);
    setUserName(data.name);
    setShow(true);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
      userHomePage();
    
    }, []);
    const CallRegister=()=>{
     history.push('/signup');
    }
    const CallLogin=()=>{
      history.push('/login');
    }
    const HomeDisplay=()=>{
      if(show)
      {
        return(
          <>
           <h1>{userName}</h1>
                 <h2>Happy to see you back!!</h2>
                  
         </>
        )
      }
      else{
        return(
          <>
                 <h2>To NSS Unit</h2>
                 <button className='LRbtn'onClick={CallRegister}>Register</button>
                   <button className='LRbtn' onClick={CallLogin}>Login</button>
          </>
        )
      }
    }
    return (
        <div className='main'>
        <div className='home'>
            <div className='home-page'>
               <div className='home-div'>
                 <h3>Welcome </h3>
                 <HomeDisplay/>
               </div>
               <div>
               <img src={wallpaper} alt='wallpaper'/>
               </div>
            </div>
        </div>
        </div>
    )
}

export default Home
