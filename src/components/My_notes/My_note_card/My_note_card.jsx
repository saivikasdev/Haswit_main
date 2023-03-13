import React from 'react'
import './My_note_card.css'
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
const My_note_card = (props) => {
  const cookies = new Cookies();
  const {Note} = props
  return (
    <Link to="/Note_detail">
    <div className="My_note_card" onClick={()=>{
      
      cookies.set('Note', Note.Note_title, { path: '/' })
    }}>
<div class="card card__">
      <h2 class="card__title">{Note.Note_title}</h2>
      <p class="card__apply">
      {Note.session}
      </p>
      <p class="card__apply">
      {Note.time}
      </p>
      <p class="View_now">
        View &gt;
      </p>
    </div>
    </div>
    </Link>
  )
}

export default My_note_card




