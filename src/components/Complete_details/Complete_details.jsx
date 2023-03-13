
import React from 'react'
import { useState } from 'react'
import './Complete_details.css'
import { doc, Firestore, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase-config";

import { useNavigate } from "react-router-dom";
import Profile_pictures from '../../Profile_pictures';
const Complete_details = () => {
  const [Name, setName] = useState('')
  const [Whatsapp, setWhatsapp] = useState('')
  const [gmail, setgmail] = useState('')
  const [study_at, setstudy_at] = useState('')
  const [address, setaddress] = useState('')
  const [about, setabout] = useState('')
  const date = new Date();
    const showTime = date.getDate()+'/'+(date.getMonth()+1)+' '+date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();  


  const navigate = useNavigate();
  function handleClick() {
    navigate("/");

    console.log('///////')
  }

  const Setdata = async (e) => {
    e.preventDefault();
    console.log(Name)
    console.log(Whatsapp)
    console.log(gmail)
    console.log(study_at)
    console.log(address)


    if (Name || Whatsapp || gmail || study_at || address || about >6) {
          await setDoc(doc(db, "Students", window.name), {
            Name:Name,
            Whatsapp:Whatsapp,  
            gmail:gmail,
            study_at:study_at,
            address:address,
            time:showTime,
            about:about,
            profile_pic:Profile_pictures[Math.floor(Math.random() * (Profile_pictures.length - 0 + 1)) + 0]
          },{ merge: true }).then(() => {
            handleClick()
  
          })
            

    }
    else{
    }
  }


  const set_name = (e) => {
    let name = e.target.value;
    setName(name);
  };
  const set_whatsapp = (e) => {
    let whatsapp = e.target.value;
    setWhatsapp(whatsapp);
  };
  const set_gmail = (e) => {
    let gmail = e.target.value;
    setgmail(gmail);
  };
  const set_study_at = (e) => {
    let study_at = e.target.value;
    setstudy_at(study_at);
  };
  const set_address = (e) => {
    let address = e.target.value;
    setaddress(address);
  };
  const set_about = (e) => {
    let about = e.target.value;
    setabout(about);
  };
  return (
   <div className="Complete_details">
       <form onSubmit={Setdata} className='Details_block' >
          
          <div className="Details_head">Enter your details</div>
            <input
            onChange={set_name}
              type="text"
              className="Name"
              placeholder="Enter Your Name"
             
            />
            <input
            onChange={set_whatsapp}
              type="text"
              className="Whatsapp"
              placeholder="Whatsapp number"
             
            /><input
            onChange={set_gmail}
            type="text"
            className="Gmail"
            placeholder="Enter Your Gmail"
           
          /><input
          onChange={set_study_at}
          type="text"
          className="Studies_at"
          placeholder="Studying at"
         
        />
        <input
            onChange={set_address}
          type="text"
          className="Address"
          placeholder="Enter Your Address"
         
        />
         <textarea
              onChange={set_about}
              type="text"
              className="project_details"
              placeholder="About me"
              rows="10"
              cols="130"
            ></textarea>
            <button type="submit" className="send_otp">
              Submit
            </button>
          </form>
   </div>
  )
}

export default Complete_details