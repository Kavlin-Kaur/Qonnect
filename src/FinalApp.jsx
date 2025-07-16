import React from "react";
import Homepage from "./Homepage";
import StudentsPage from "./pages/StudentsPage";
import FacultyPage from "./pages/FacultyPage";
import InquiryPage from "./pages/InquiryPage";
import StudyGroups from "./pages/StudyGroups";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const FinalApp = () => (
  <Router>
    <nav style={{ padding: "1rem", background: "#e3f0ff" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
      <Link to="/students" style={{ margin: "0 1rem" }}>Students</Link>
      <Link to="/faculty" style={{ margin: "0 1rem" }}>Faculty</Link>
      <Link to="/inquiry" style={{ margin: "0 1rem" }}>Inquiry</Link>
      <Link to="/studygroups" style={{ margin: "0 1rem" }}>Study Groups</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/inquiry" element={<InquiryPage />} />
      <Route path="/studygroups" element={<StudyGroups />} />
    </Routes>
  </Router>
);

export default FinalApp; 