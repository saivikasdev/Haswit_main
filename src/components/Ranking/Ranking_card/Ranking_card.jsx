import React from 'react'
import './Ranking_card.css'

import { UisFavorite } from '@iconscout/react-unicons-solid';
import Profile_pic from '../../../images/bitmoji.png';
const Ranking_card = () => {
  return (
    <div className="Ranking_card">
              <div class="container_ d-flex justify-content-center mt-5">

<div class="card___">
  
  <div class="top-container_">
    
    <img src={Profile_pic} class="img-fluid profile-image" width="70"/>
    
    <div class="ml-3">
      <h5 class="name">Clarke Jeffery</h5>
      <p class="mail">UID : 84737</p>
    </div>
  </div>


  <div class="middle-container_ d-flex justify-content-between align-items-center mt-3 p-2">
      <div class="hashtag-div px-3">
        
        <div class="round-div"><i class="fa hashtag">#</i></div>

      </div>
      <div class="d-flex flex-column text-right mr-2">
        <span class="current-balance">#33</span>
        <span class="amount"><span class="hashtag-sign"><UisFavorite color="#8757f9"/></span>1476</span>
      </div>

  </div>

  <div class="recent-border mt-4">
    <span class="recent-orders">Eligible Jobs</span>
  </div>
  <div class="wishlist-border pt-2">
    <span class="wishlist">At Tectonics</span>
  </div>
  <div class="fashion-studio-border pt-2">
    <span class="fashion-studio">No more..</span>
  </div>
  
</div>

</div>
    </div>
  )
}

export default Ranking_card