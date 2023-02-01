import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, LandingPage2 } from "./components/Pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage2" element={<LandingPage2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
