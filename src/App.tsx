import React from "react";
import "./App.css";
import { Header2 } from "./components/Header";
import { Footer2 } from "./components/Footer";
import { LandingPage } from "./components/Pages";
function App() {
  return (
    <div className="App">
      <Header2 />
      <LandingPage />
      <Footer2 />
    </div>
  );
}

export default App;
