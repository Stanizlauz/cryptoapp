// import About from "./About";
import AboutTeamSecond from "./AboutTeamSecond";
import CarouselWrapper from "./CarouselWrapper";
import CounterSecion from "./CounterSecion";
import Cryptohopper from "./Cryptohopper";
import Footer from "./Footer";
import Headerss from "./Headerss";
import Pricing from "./Pricing";
import Services from "./Services";

export default function HomePageBody() {
  return (
    <>
      <Headerss />
      <CarouselWrapper />
      <Services />
      <Pricing />
      <AboutTeamSecond />
      <CounterSecion />
      <Cryptohopper />
      <Footer />
    </>
  );
}
