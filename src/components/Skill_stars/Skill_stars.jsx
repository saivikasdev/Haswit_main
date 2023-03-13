import React from 'react'
import './Skill_stars.css'
import { UisFavorite } from '@iconscout/react-unicons-solid';
import History_card from './History_card/History_card';
const Skill_stars = () => {
  return (
    <div className="Skill_stars">
        <div className="Skillstars_title">
            Skill Stars
        </div>
        <div className="Head_container">


            <div className="first_cont">
            <div className="Skill_Stars">
              <UisFavorite className ="UisFavorite" size ="60px"/>
              21
            </div>
            <div className="Complete_sessions">
              Complete Sessions upto date for more skill stars
            </div>
            </div>



            <div className="Second_cont">
            <div className="Position">
              #61
            </div>
            <div className="Do_projects">
              Ranking in Ranking board
            </div>
            </div>

        </div>

        <div className="Skill_stars_body">
          <div className="history_title">
            Skill Stars History
          </div>
     
          <History_card/>
          
          <History_card/>
          
          <History_card/>
          <History_card/>
          <History_card/>
          <History_card/>
          
          <History_card/>
          <History_card/>
          <History_card/>
          <History_card/>
          <History_card/>
          <History_card/>
        </div>
    </div>
  )
}

export default Skill_stars