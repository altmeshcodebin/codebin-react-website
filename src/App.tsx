import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, LandingPage2, LandingPage3 } from "./components/Pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage2" element={<LandingPage2 />} />
          <Route path="/LandingPage3" element={<LandingPage3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
