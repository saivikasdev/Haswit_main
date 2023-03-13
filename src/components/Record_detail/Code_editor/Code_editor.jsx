import React, { useState } from "react";
import Cookies from "universal-cookie";
import AceEditor from "react-ace";

// Import Ace editor modes and themes
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import './Code_editor.css'
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
const LiveCodeEditor = () => {
   const cookies = new Cookies();
   const [code_title, setcode_title] = useState('')
  const [html, setHtml] = useState("<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
  const [css, setCss] = useState("body {background-color: powderblue;}h1   {color: blue;}p    {color: red;}");
  const [js, setJs] = useState("");
  const runCode = () => {
    const iframe = document.getElementById("output");
    const iframeContent = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `;
    iframe.srcdoc = iframeContent;
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

  const savecode = async (e) => {
   e.preventDefault();
   if (code_title.length > 5) {
     await setDoc(
       doc(
         db,
         "Students",
         cookies.get("user").phoneNumber,
         "Codes",
         code_title
       ),
       {
         html: html,
         css: css,
         js:js,
         time: showTime,
         session: "python dataypes",
         code_title: code_title,
       },
       { merge: true }
     ).then(() => {
       document.getElementById("add_note_form");
     });
   } else {
   }
 };



  return (
    <div>
      <div>
         HTML
        <AceEditor
        
        width="40vw"
        height="20vh"
        className="editor"
          mode="html"
          theme="monokai"
          defaultValue ='<!DOCTYPE html>
          <html>
          <body>
          
          <h1>My First Heading</h1>
          <p>My first paragraph.</p>
          
          </body>
          </html>'
          onChange={(value) => setHtml(value)}
          name="html-editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div>
         CSS
        <AceEditor
        width="40vw"
        height="20vh"
        className="editor"
          mode="css"
          theme="monokai"
          defaultValue="body {background-color: powderblue;}
          h1   {color: blue;}
          p    {color: red;}"
          onChange={(value) =>{ 
            setCss(value)
            runCode()
         }}
          name="css-editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div>
         Javascript
        <AceEditor
        width="40vw"
        height="20vh"
        className="editor"
          mode="javascript"
          theme="monokai"
          onChange={(value) => setJs(value)}
          name="js-editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div>
        <div className="code_row">
        <button className="runcode" onClick={runCode}>Run</button>
        
        <form onSubmit={savecode} className="add_note_form">
        <input
                type="text"
                className="code_title"
                placeholder="Code title"
                onChange={(e) => {
                  setcode_title(e.target.value);
                }}
              />
              <button className="runcode">Save</button>
              </form>
        </div>

      </div>
      <div>
        <iframe id="output"
        className="output"
        ></iframe>
      </div>
    </div>
  );
};

export default LiveCodeEditor;
