import React from "react";
import "./App.css";
import {
  Banner,
  Portfolio,
  Services,
  Technologies,
} from "./components/Sections";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Technologies />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
