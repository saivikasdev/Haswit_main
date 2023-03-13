import React, { useState } from "react";
import "./Home_body.css";
import { UilPlayCircle } from "@iconscout/react-unicons";
import Left_mini_calender from "./Left_mini_calender/Left_mini_calender";
import Right_blocks from "./Right_blocks/Right_blocks";
function Home_body() {
  const [live, setlive] = useState(false);
  return (
    <div className="Home_body">
      <div className="live_banner">
        <div className="up_texts">
          <div className="join_now">{live ? "join now" : "Set remainder"}</div>
          <div className="large_text">
            {live
              ? "Live session Started please join..."
              : "Session is at today 8PM.. Set Reminder!"}
          </div>
        </div>
        <div className="small_text">
          <UilPlayCircle />
          Session is on python datatypes
        </div>
      </div>
      <div className="Test_pending">
        Test on Python Data Types is Pending
        <div className="write_now_button">
          Write Now
        </div>
      </div>
      <div className="Left_right_cont">
        <Left_mini_calender />
        <Right_blocks />
      </div>
    </div>
  );
}

export default Home_body;
