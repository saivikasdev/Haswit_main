import React from 'react'
import './Current_session.css'
import { UisArrowCircleRight } from '@iconscout/react-unicons-solid'
import { Link } from 'react-router-dom'
const Current_sessions = () => {
  return (
    <div className="Current_sessions">
        <div className="text">
        <h1>
           my progress
           </h1>
        </div>
   <Link to = '/Record_detail'>
   <div className="session">
    <div className="name">
    Python Datatypes
    </div>
        <div className="date_">
            12/03
        </div>
        <div className="now">
            Watch Now ▶
        </div>
    </div>
   </Link>
    <div className="session">
        <div className="name">
            
    Python Flask Introduction
        </div>
        <div className="date_">
            13/03
        </div>
        <div className="now">
            Watch Now ▶
        </div>
    </div>
    <div className="viewmore">
        <div className="view_more_text">
            
    complete the two sessions to view more
        </div>
        <UisArrowCircleRight size="70px" color="rgba(238, 238, 238, 0.904)"/>
    </div>
    </div>
  )
}

export default Current_sessions