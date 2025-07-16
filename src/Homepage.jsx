import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Welcome to Qonnect</h1>
    <p>Your academic networking platform.</p>
    <div style={{ marginTop: "2rem" }}>
      <Link to="/students">Students</Link> | {" "}
      <Link to="/faculty">Faculty</Link> | {" "}
      <Link to="/inquiry">Inquiry</Link> | {" "}
      <Link to="/studygroups">Study Groups</Link>
    </div>
  </div>
);

export default Homepage; 