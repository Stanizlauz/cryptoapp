import React from "react";
import About from "./About";
import AboutTeamSecond from "./AboutTeamSecond";
import BinanceView from "./BinanceView";
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
      <BinanceView />
      <About />
      <Services />
      <Pricing />
      <AboutTeamSecond />
      <CounterSecion />
      <Footer />
    </>
  );
}
