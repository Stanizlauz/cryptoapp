import React from "react";
import About from "./About";
import AllChart from "./AllChart";
import BinanceView from "./BinanceView";
// import HowItWork from "./HowItWork";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Pricing from "./Pricing";
import CarouselWrapper from "./CarouselWrapper";
import AboutTeam from "./AboutTeam";
import AboutTeamSecond from "./AboutTeamSecond";

export default function HomePageBody() {
  return (
    <>
      <CarouselWrapper />
      <BinanceView />
      <About />
      <AllChart />
      <Services />
      <Testimonial />
      {/* <HowItWork /> */}
      <Pricing />
      {/* <Team /> */}
      {/* <AboutTeam /> */}
      <AboutTeamSecond />
    </>
  );
}
