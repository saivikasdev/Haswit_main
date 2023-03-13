import React from 'react'
import './History_card.css'
import { UisFavorite } from '@iconscout/react-unicons-solid';
const History_card = () => {
  return (
    <div className="History_card">
        <div className="history_row">
        <div className="Points_scored">
          21
          
          <UisFavorite size="20px"/>
        </div>
          <div className="on_what">
            Basic Webpage project
          </div>
          <div className="date">
            21/12
          </div>
        </div>


        <hr class="solid"/>

    </div>
  )
}

export default History_card