import React ,{useEffect,useState} from 'react'
// import homeimg from '../photos/home.JPG'
const Home = () => {
    
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
