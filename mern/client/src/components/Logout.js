import React, { useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../App";
const Logout = () => {
  const {state,dispatch} = useContext(UserContext);
    const history = useHistory();
    const callLogout = async()=>{
       try{
         const res = await fetch('/logout',{
         method:"GET",
         headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
         },
         Credentials:"include"
       });
       if(!res.status===200){
          const error = new Error(res.error);
          throw error;
       }else{
        dispatch({type:"USER",payload:false});
           history.push('/login',{replace:true});
       }
 
       }catch(err){
         console.log(err);
       }
    }
    useEffect(() => {
      callLogout();
    
    }, []);
  return <>
  <h1>Logout Page</h1>
  </>;
};

export default Logout;
