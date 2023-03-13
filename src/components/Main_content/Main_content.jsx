import './Main_content.css'
import React from 'react'
import Home_nav from './Home_nav/Home_nav'
import Home_body from './Home_body/Home_body'
import { UilPhone } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
function Main_content() {
  return (
   <div className="Main_content">
     <div className="Home">
     <Home_nav/>
     <Home_body/>
     
     <Link to='/Help'>
     <div className="FAB">



      
        <UilPhone/>
      </div>
     </Link>
     
     </div>
   </div>
  )
}

export default Main_content