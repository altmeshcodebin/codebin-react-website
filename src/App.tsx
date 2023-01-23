import React from "react";
import "./App.css";
import {Banner, Services, Technologies} from "./components/Sections";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Technologies/>
    </div>
  );
}

export default App;
