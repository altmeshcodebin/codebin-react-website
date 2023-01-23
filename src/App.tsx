import React from "react";
import "./App.css";
import {Banner, Portfolio, Services, Technologies} from "./components/Sections";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Technologies />
      <Portfolio/>
    </div>
  );
}

export default App;
