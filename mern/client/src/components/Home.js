import React ,{useEffect,useState} from 'react'

const Home = () => {
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
    return (
        <div className='main'>
        <div className='home'>
            <div className='home-page'>
               <div className='home-div'>
                 <p className='pt-5'>Welcome </p>
                 <h1>{userName}</h1>
                 <h2>{show?'Happy to see you back!!':'We Are The Mern Developer'}</h2>
               </div>
            </div>
        </div>
        </div>
    )
}

export default Home
