import React from "react";
// import About from "./About";
import AboutTeamSecond from "./AboutTeamSecond";
import AllChart from "./AllChart";
import CarouselWrapper from "./CarouselWrapper";
import CounterSecion from "./CounterSecion";
import Footer from "./Footer";
import Headerss from "./Headerss";
import Pricing from "./Pricing";
import Services from "./Services";

export default function HomePageBody() {
  return (
    <>
      <Headerss />
      <CarouselWrapper />
      {/* <BinanceView /> */}
      {/* <About /> */}
      <AllChart />
      <Services />
      <Pricing />
      <AboutTeamSecond />
      <CounterSecion />
      <Footer />
    </>
  );
}
