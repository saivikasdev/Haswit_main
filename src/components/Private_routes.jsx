import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { authentication } from '../firebase-config'
import Cookies from 'universal-cookie';
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
const Private_routes = ({children}) => {
  
  const cookies = new Cookies();
  const [current_user, setcurrent_user] = useState(null)
let currentUser = 'null';
  useEffect(() => {
    onAuthStateChanged(authentication,(user)=>{
      // currentUser = user.phoneNumber
      // console.log(currentUser)
      setcurrent_user(user)

    })


    
  }, [])
  


  console.log(cookies.get('user'));
   if(cookies.get('user')){
    return children;
   }
   else{
    return <Navigate to={"/Signup"}/>
   }
   
}

export default Private_routes;