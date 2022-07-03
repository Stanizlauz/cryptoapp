import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function CarouselWrapper() {
  return (
    <>
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
                     Get Organized and make profit
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                   All you need to become a better earner in one place
                  </p>
                  <Link
                    to="/about"
                    className="btn btn-outline-light btn-xs btn-icon-text"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          <img src="img/about-1.jpg" alt=".."/>
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
                    Get Started Today
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                    We have over 30,000 happy client
                  </p>
                  <Link
                    to="/about"
                    className="btn btn-outline-light btn-xs btn-icon-text"
                  >
                    More about us
                  </Link>
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
                    Recognizing your need is our primary motive.
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                    We Are Here Always. 24/7
                  </p>
                  <Link
                    to="/about"
                    className="btn btn-outline-light btn-xs btn-icon-text"
                  >
                    More about us
                  </Link>
                </div>
              </div>
            </div>
          <img src="img/about-3.jpg" alt=".."/>
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
          <img src="images/bg_1.jpg" alt=".."/>
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
    </>
  );
}
