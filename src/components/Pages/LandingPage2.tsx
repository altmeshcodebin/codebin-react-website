import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import {
  Banner,
  JoinUS,
  Services,
  Team,
  Technologies,
  Clients,
} from "../Sections";

const LandingPage2 = () => {
  return (
    <div className="select-none ">
      <Header />
      <Banner />
      <Clients />
      <Technologies />
      <Services />
      <Team />
      <JoinUS />
      <Footer />
    </div>
  );
};

export default LandingPage2;
