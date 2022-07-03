import React from "react";
import Headerss from "./Headerss";
import Footer from "./Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function AboutUs() {
  return (
    <>
      <Headerss />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          {/* <h5 className="caption">First slide label</h5> */}
          <div className="caption">
              <div className="col-sm-6 xs-padding mb-4">
                <div className="text-datk">
                  <h3
                    style={{
                      backgroundColor: "#00757F",
                      padding: "10px 15px",
                      borderRadius: "2px",
                    }}
                  >
                    Welcome to Arks Trades.
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                    We take your privacy and security very serious here at Arkstrades. As a platform you can trust, we're built with a 256 bit encryption level to add an additional layer of security. You can protect your assets by setting up your account to use google two factor authenticator
                  </p>
                
                </div>
              </div>
            </div>
          <img src="img/invest-1.jpg" alt=".."/>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
         <div className="caption">
              <div className="col-sm-6 xs-padding mb-4">
                <div className="text-datk">
                  <h3
                    style={{
                      backgroundColor: "#00757F",
                      padding: "10px 15px",
                      borderRadius: "2px",
                    }}
                  >
                    Risk Analysis
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                  'Business' means that you have to treat this endeavour as a business and not a gamble. if you had a business plan to show Warrent Buffett, would he approve and invest in you? Bussiness that are strong with a clear strategy ,with a competitive moat. You need to structure your trading business in the same way. Make a deposit through our secure wallet to wallet transfer and get credited almost instantly and start earning daily intrest till deposit term expire
                  </p>
                  
                </div>
              </div>
            </div>
          <img src="img/invest-2.jpg" alt=".."/>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
         <div className="caption">
              <div className="col-sm-6 xs-padding mb-4">
                <div className="text-datk">
                  <h3
                    style={{
                      backgroundColor: "#00757F",
                      padding: "10px 15px",
                      borderRadius: "2px",
                    }}
                  >
                    Complete Financial Planning
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                   Developing a clear edge, sitting on your hands untill your edge is in play (patient) diversifying your bets without disworsifying them, and managing correlation is key to this part of the equation. But also being in a personal posistion toi make trading work for you. Dont think about paying up your bills instantly with your trading. rather, make sure you have diversify income streams that allows you learn survive and then thrive without been pressured to perform
                  </p>
                  
                </div>
              </div>
            </div>
          <img src="img/invest-3.jpg" alt=".."/>
        </SwiperSlide>
        {/* <SwiperSlide>
          {" "}
         <div className="caption">
              <div className="col-sm-6 xs-padding mb-4">
                <div className="text-datk">
                  <h3
                    style={{
                      backgroundColor: "#00757F",
                      padding: "10px 15px",
                      borderRadius: "2px",
                    }}
                  >
                    Recognizing your need is our primary motive.
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                    Our aim is to minimize risk and make profit from the crypto
                    currency market while putting smiles on our customers faces.
                  </p>
                  <a
                    to="#"
                    className="btn btn-outline-light btn-xs btn-icon-text"
                  >
                    More about us
                  </a>
                </div>
              </div>
            </div>
          <img src="img/slider-1.jpg" alt=".."/>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          {" "}
         <div className="caption">
              <div className="col-sm-6 xs-padding mb-4">
                <div className="text-datk">
                  <h3
                    style={{
                      backgroundColor: "#00757F",
                      padding: "10px 15px",
                      borderRadius: "2px",
                    }}
                  >
                    Recognizing your need is our primary motive.
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                    Our aim is to minimize risk and make profit from the crypto
                    currency market while putting smiles on our customers faces.
                  </p>
                  <a
                    to="#"
                    className="btn btn-outline-light btn-xs btn-icon-text"
                  >
                    More about us
                  </a>
                </div>
              </div>
            </div>
          <img src="images/bg_2.jpg" alt=".."/>
        </SwiperSlide> */}
      </Swiper>

   

      <section className="team section">
        <div className="container">
          <h1 className="section-title2">Our Team</h1>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img src="img/joandav.jpg" alt="" />
                  <figcaption>
                    <div className="info">
                      <h3>Miss Joan Davies</h3>
                      {/* <a href="https://t.me/Stanizlauz" aria-hidden="true"><i className="fa-telegram" /></a> */}
                    </div>
                    <div className="social">
                      <a href="https://t.me/joandavies">
                        <i className="ti ti-comment" aria-hidden="true"></i>{" "}
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img src="img/denise-thompson.jpg" alt="" />
                  <figcaption>
                    <div className="info">
                      <h3>Miss Denise Thompson</h3>
                    </div>
                    <div className="social">
                      {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
                      <a href="https://t.me/mrsdenisethompson">
                        <i className="ti ti-comment" aria-hidden="true"></i>{" "}
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img src="img/anitajenna.jpg" alt="" />
                  <figcaption>
                    <div className="info">
                      <h3>Miss Anita Jenna</h3>
                    </div>
                    <div className="social">
                      <a href="https://t.me/anitajenna">
                        <i className="ti ti-comment" aria-hidden="true"></i>{" "}
                      </a>
                      {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img src="img/helen.jpg" alt="" />
                  <figcaption>
                    <div className="info">
                      <h3>Miss Helen Williams</h3>
                    </div>
                    <div className="social">
                      <a href="https://t.me/experthelen">
                        <i className="ti ti-comment" aria-hidden="true"></i>{" "}
                      </a>
                      {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img src="img/evelyn.jpg" alt="" />
                  <figcaption>
                    <div className="info">
                      <h3>Miss Allen Justina</h3>
                    </div>
                    <div className="social">
                      <a href="https://t.me/allenjustina">
                        <i className="ti ti-comment" aria-hidden="true"></i>{" "}
                      </a>
                      {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="counter" className="counter_section">
        <div className="container">
          <ul className="row counters">
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter_content">
                <i className="ti-reload" />
                <h3 className="counter">85389</h3>
                <h4>TOTAL TRANSACTIONS</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter_content">
                <i className="ti-time" />
                <h3 className="counter">10293</h3>
                <h4>TRANSACTIONS PER HOUR</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter_content">
                <i className="ti-stats-up" />
                <h3 className="counter">50177</h3>
                <h4>LARGEST TRANSACTIONS</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter_content">
                <i className="ti-comments" />
                <h3 className="counter">669</h3>
                <h4>Positive Feedbacks</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Counter Section */}
      <Footer />
    </>
  );
}
