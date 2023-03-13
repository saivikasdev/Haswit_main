import React, { useState } from "react";
import "./Record_detail.css";
import { setDoc, doc } from "firebase/firestore";
import Cookies from "universal-cookie";
import { db } from "../../firebase-config";
import Code_editor from "./Code_editor/Code_editor";
import LiveCodeEditor from "./Code_editor/Code_editor";
const Record_detail = () => {
  const [code, setcode] = useState(true);
  const [note, setnote] = useState("");
  const [note_title, setnote_title] = useState("");
  const cookies = new Cookies();
  const note_set = (e) => {
    let note = e.target.value;
    setnote(note);
  };
  const date = new Date();
  const showTime =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  const Add_note = async (e) => {
    e.preventDefault();
    if (note.length > 15) {
      await setDoc(
        doc(
          db,
          "Students",
          cookies.get("user").phoneNumber,
          "Notes",
          note_title
        ),
        {
          Note: note,
          time: showTime,
          session: "python dataypes",
          Note_title: note_title,
        },
        { merge: true }
      ).then(() => {
        document.getElementById("add_note_form");
      });
    } else {
    }
  };

  return (
    <div className="Record_detail">
      <div className="left_video">
        <div className="Record_detail_title">python data types</div>
        <div className="record_player">
          <iframe
            className="video_player"
            src="https://drive.google.com/file/d/1JOZBkMwOllSNg7ameXnAj1dlagusMeux/preview"
            allow="autoplay"
          ></iframe>

          <div className="go_to_test">Finish Go to Test</div>
        </div>
      </div>
      <div className="right_blocks">
        <div className="buttons">
          <button
            type="submit"
            className="basic_button"
            onClick={() => {
              setcode(true);
            }}
          >
            Live compiler
          </button>
          <button
            type="submit"
            className="basic_button"
            onClick={() => {
              setcode(false);
            }}
          >
            Note something
          </button>
        </div>
        {code === false ? (
          <>
            <form onSubmit={Add_note} className="note_form">
              <textarea
                onChange={note_set}
                type="text"
                className="Note_field_"
                placeholder="Note something"
                rows="10"
                cols="130"
              ></textarea>
              <input
                type="text"
                className="note_title"
                placeholder="Note title"
                onChange={(e) => {
                  setnote_title(e.target.value);
                }}
              />

              <button type="submit" className="basic_button">
                Add note
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="live_compiler">
              <LiveCodeEditor />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Record_detail;
