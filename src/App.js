import "./App.css";
import Main_content from "./components/Main_content/Main_content";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import My_journey from "./components/My_journey/My_journey";
import Ranking from "./components/Ranking/Ranking";
import Projects from "./components/Projects/Projects";
import Live_compiler from "./components/Live_compiler/Live_compiler";
import Doughts from "./components/Doughts/Doughts";
import My_notes from "./components/My_notes/My_notes";
import Jobs from "./components/Jobs/Jobs";
import My_codes from "./components/My_codes/My_codes";
import Skill_stars from "./components/Skill_stars/Skill_stars";
import Profile_page from "./components/Profile_page/Profile_page";
import Help from "./components/Help/Help";
import Project_details from "./components/Projects/Project_details/Project_details";
import Dought_detail from "./components/Doughts/Dought_detail/Dought_detail";
import Record_detail from "./components/Record_detail/Record_detail";
import Test_page from "./components/Test_page/Test_page";
import Signup from "./components/Signup/Signup";
import Complete_details from "./components/Complete_details/Complete_details";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged, updatePhoneNumber, getAuth } from "firebase/auth";
import { authentication } from "./firebase-config";
import Private_routes from "./components/Private_routes";
import Cookies from 'universal-cookie';
import Note_detail from "./components/My_notes/Note_detail/Note_detail";
import LiveCodeEditor from "./components/Live_compiler/Live_compiler";
import Code_detail from "./components/My_codes/Code_detail/Code_detail";
function App() {
  const [project, setproject] = useState("");
  const [sidebar, setsidebar] = useState(true);
  const [currentuser, setcurrentuser] = useState(null);
  const [senduser, setsenduser] = useState(false);
  const auth = getAuth();

  const cookies = new Cookies();
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      setcurrentuser(user.phone_number);
      setsenduser(true);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Main_content />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="My_journey"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <My_journey />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Ranking"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Ranking />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Projects"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Projects />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Live_compiler"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <LiveCodeEditor />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Doughts"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Doughts />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="My_notes"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <My_notes />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Code_detail"
              element={
                <>
                  {
                    <Private_routes>
                      <Code_detail/>
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="My_codes"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <My_codes />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Jobs"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Jobs />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Skill_Stars"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Skill_stars />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Profile_page"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Profile_page />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Help"
              element={
                <>
                  {
                    <Private_routes>
                      <Sidebar className="Sidebar" />
                      <div className="gap"></div>
                      <Help />
                    </Private_routes>
                  }
                </>
              }
            />
            <Route
              path="Project_details"
              element={
                <Private_routes>
                  <Project_details />
                </Private_routes>
              }
            />
            <Route
              path="Dought_detail"
              element={
                <Private_routes>
                  <Dought_detail />
                </Private_routes>
              }
            />
            <Route
              path="Record_detail"
              element={
                <Private_routes>
                  <Record_detail />
                </Private_routes>
              }
            />
            <Route
              path="Test"
              element={
                <Private_routes>
                  <Test_page />
                </Private_routes>
              }
            />
            <Route
              path="Note_detail"
              element={
                <Private_routes>
                  <Note_detail />
                </Private_routes>
              }
            />
            <Route path="Signup" element={<Signup />} />
            <Route path="Complete_details" element={<Complete_details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
