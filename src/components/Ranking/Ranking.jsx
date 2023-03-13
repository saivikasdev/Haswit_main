import React from "react";
import "./Ranking.css";
import Ranking_card from "./Ranking_card/Ranking_card";
const Ranking = () => {
  return (
    <div className="Ranking">
      <div className="Ranking_title">
      Ranking Board
      </div>
      <div className="Headings_grid">
        <div className="Complete_rec">
        # Complete Records Upto Date 
        </div>
        <div className="Do_projects_">
        # Look for projects to Earn More Skill Stars
        </div>
        <div className="To_get_job">
        # You may get <span>Tech Mahindra Intership</span> by The End Of Course
        </div>
        <div className="Skill_stars">
        # You Had <span>212</span> Skill Stars
        </div>
        <div className="position">
        # You Are In <span>22</span> Position
        </div>
      </div>
      <div className="Cards">
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
        <Ranking_card />
      </div>
    </div>
  );
};

export default Ranking;
