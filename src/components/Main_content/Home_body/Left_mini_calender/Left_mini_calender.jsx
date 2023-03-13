import React from 'react'
import Current_sessions from './Current_sessions/Current_sessions'
import './Left_mini_calender.css'
import Scrollable_calender from './Scrollable_calender/Scrollable_calender'
const Left_mini_calender = () => {
  return (
    <div className="Left_mini_calender">
        <div className="Left_mini_calender_container">
          <div className="title">
            <div className="Main_title">
              <h3>Your Progress</h3>
            </div>
            <div className="Full_calender">
            View Calender
            </div>
          </div>
        <div className="Scrollable_calender">
        <Scrollable_calender/>
            </div>
            <div className="Current_sessions">
           <Current_sessions/>
            </div>
        </div>
    </div>
  )
}

export default Left_mini_calender