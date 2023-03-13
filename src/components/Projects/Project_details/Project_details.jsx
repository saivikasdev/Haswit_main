import React, { useEffect, useState } from "react";
import "./Project_details.css";
import { UisFavorite } from '@iconscout/react-unicons-solid';
import spinner from '../../../images/fidget.png';
import Cookies from "universal-cookie";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
const Project_details = (props) => {
  const cookies = new Cookies();
  const { project } = props

const [Project, setProject] = useState([])
  const fetchDetails = async () => {
    

    const docRef = doc(db, "Projects", cookies.get('project'));
    const docSnap = await getDoc(docRef);
    
    console.log("Document data:", docSnap.data().Project_name);
    if (docSnap.exists()) {
      setProject(docSnap.data())
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
    console.log("No such document!");
  
  };
  useEffect(() => {
    
    fetchDetails()
  }, [])
  return (
    <div className="Project_details">
      <div className="Project_details_title">{cookies.get('project')} project-details</div>
     <div className="image_body_row">
     <div className="Project_details_body">
        <div className="point_get">
          Points for this project :
          {Project.Points}
            <UisFavorite/>
        </div>
        <div className="Requirements_description">
          <div className="Project_name">
            Project name : 
         {cookies.get('project')}
          </div>
          <div className="Project_desc_title">
            Requirements Description : _
            {Project.Details}

          </div>
        </div>
        <div className="end_date">
            {Project.End_date}
        </div>
        <div className="i_will_make_button">
          I will Do it
        </div>
        <div className="process_project">
          Do the project and upload it here before the end date to earn the skill stars...
        </div>
      </div>
      <img src=
         
         {Project.image} alt="" className="spinner"/>
     </div>
      
    </div>
  );
};

export default Project_details;
