import React from 'react'
import './Projects.css'
import Project_card from './Project_card/Project_card'
import { useState ,useEffect } from "react";
import { collection, query, where, getDocs,onSnapshot } from "firebase/firestore";
import { db } from '../../firebase-config';
const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setprojects] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const q = query(collection(db, "Projects"),);
    onSnapshot(q, (querySnapshot) => {
      const Projects = [];
      querySnapshot.forEach((doc) => {
        Projects.push(doc.data());
      });
      setprojects([...Projects]);
       setLoading(false);
    });
  
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="Projects">
        <div className="Projects_title">
            Projects
        </div>
        <div className="Projects_grid">
            {projects.length > 0 &&
        projects.map((project, index) => (
          <Project_card project={project}/>
        ))}
        </div>
 

    </div>
  )
}

export default Projects