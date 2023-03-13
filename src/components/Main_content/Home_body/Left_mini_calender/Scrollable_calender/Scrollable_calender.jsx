import React from 'react'
import './Scrollable_calender.css'
import { Scroll_calender_data } from "./Scroll_calender_data";
import { UisCheckCircle } from '@iconscout/react-unicons-solid'
const Scrollable_calender = () => {
  return (
    <div className="Scrollable_calender">
        {Scroll_calender_data.map((item, index) => {
          return (
           <div className={item.current ?'day_date current':'day_date'}>
            <div className="day">
               {item.day}
            </div>
            <div className="date">
                {item.date}
            </div>
            
           <div className="status">
            {item.completed?<UisCheckCircle size='15' color='#ffffffd3'/>:<div></div>}
            </div>
           </div>

          );
        })}
    </div>
  )
}

export default Scrollable_calender



