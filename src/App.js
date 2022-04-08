import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import { Footer } from "./components/Footer";
import Phd from "./pages/Phd";
import Student from "./pages/student/Student";
import S2020Batch from "./pages/student/S2020Batch";
import S2019Batch from "./pages/student/S2019Batch";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import DegreeProgram from "./pages/DegreeProgram";
import BtechProgram from "./pages/BtechProgram";
import WelcomePage from "./pages/WelcomePage";
import ResearchArea from "./pages/ResearchArea";
import ResearchPapers from "./pages/ResearchPapers";
import Coursematerial from "./pages/Coursematerial";
import DepartmentLetter from "./pages/DepartmentLetter";
import Vision from "./pages/Vision";
import FacultyCoordinators from "./pages/FacultyCoordinators";




function App() {
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 4800);
  }, [])


  return (

    Load ?
      <WelcomePage />
      :

      <div className="container main-cnt">

        {/* Logo and Name */}
        <div className="navTop">
          <img src="/img/logo3.webp" alt="logo" />
          <div className="logo-text">
            <h3>Department of Information Technology</h3>
            <h6>National Institute of Technology Srinagar</h6>
          </div>
        </div>

        {/* Navbar */}

        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/faculty">
                <Faculty />
              </Route>
              <Route exact path="/phd-scholars">
                <Phd />
              </Route>
              <Route exact path="/student">
                <Student />
              </Route>
              <Route exact path="/student/batch_2020">
                <S2020Batch />
              </Route>
              <Route exact path="/student/batch_2019">
                <S2019Batch />
              </Route>
              <Route exact path="/staff">
                <Staff />
              </Route>
              <Route exact path="/research-area">
                <ResearchArea />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/degree-program">
                <DegreeProgram />
              </Route>
              <Route exact path="/degree-program/btech-p">
                <BtechProgram />
              </Route>
              <Route exact path="/course-syllabus">
                <Coursematerial />
              </Route>
              <Route exact path="/news-letter">
                <DepartmentLetter />
              </Route>
              <Route exact path="/vision-mission">
                <Vision />
              </Route>
              <Route exact path="/coordinators">
                <FacultyCoordinators />
              </Route>
              <Route exact path="/research-papers">
                <ResearchPapers />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>

      </div>

  );
}

export default App;
