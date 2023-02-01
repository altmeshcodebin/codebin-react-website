import React from "react";
import { Header2 } from "../Header";
import { Footer2 } from "../Footer";
import {
  Banner2,
  JoinUS,
  Clients2,
  Services2,
  Team2,
  Technologies2,
} from "../Sections";

const LandingPage = () => {
  return (
    <div className="select-none ">
      <Header2 />
      <Banner2 />
      <Clients2 />
      <Technologies2 />
      <Services2 />
      <Team2 />
      <JoinUS />
      <Footer2 />
    </div>
  );
};

export default LandingPage;
