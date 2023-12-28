import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import { Container } from "@mui/material";
 
const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Container style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </Container>
    </Router>
  );
};
 
export default App;
 