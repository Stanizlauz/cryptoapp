import React from "react";

export default function Slider() {
  return (
    <>
      <div className="home_page">
        <div className="slide">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item">
                <section className="sectionn1">
                  <div className="content">
                    <div className="innerguy">
                      <div className="landing_header_one">
                        Get Organized and make profit
                      </div>
                      <div className="landing_header_three mr-3">
                        All you need to become a better earner in one place
                      </div>
                      <div style={{ zIndex: "2000 !important" }}>
                        <a href="/about" className="landing_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="carousel-item active">
                <section className="sectionn2">
                  <div className="content">
                    <div className="innerguy">
                      <div className="landing_header_one">
                        Get Started Today
                      </div>
                      <div className="landing_header_three mr-5">
                        We have over 30,000 happy client
                      </div>
                      <a
                        href="/login"
                        style={{ zIndex: "20 !important" }}
                        className="landing_btn"
                      >
                        Get started
                      </a>
                    </div>
                    {/*                     
                              <img src="../static/browser_picture/snackfever-lead-capture-page-12.png" alt=""> */}
                  </div>
                </section>
              </div>
              <div className="carousel-item">
                <section className="sectionn3">
                  <div className="content">
                    <div className="innerguy">
                      <div className="landing_header_one">
                        We Are Here For You.
                      </div>
                      <div className="landing_header_three mr-5">
                        We Are Here Always. 24/7
                      </div>
                      <a
                        href="/about"
                        style={{ zIndex: 20 }}
                        className="landing_btn"
                      >
                        Read more
                      </a>
                    </div>
                    {/*                     
                              <img src="../static/browser_picture/snackfever-lead-capture-page-12.png" alt=""> */}
                  </div>
                </section>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
