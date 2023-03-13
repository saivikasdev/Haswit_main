import React from "react";
import "./Student_current.css";
const Student_current = () => {
  return (
    <div className="Student_current">
      <div className="Skill_stars_gained">
        <div className="Skill_stars_value">110</div>
        Skill Stars Gained
      </div>
      <div className="Ranking_position">
        <div className="Ranking_position_value">31</div>
        Position in Ranking Board
      </div>
      <div className="Percentage_completed_">
        <div className="Percentage_completed_value">80%</div>
        Training completed
      </div>
      <div className="Days_left">
        <div className="Days_left_value">20</div>
        Days left
      </div>
    </div>
  );
};

export default Student_current;
