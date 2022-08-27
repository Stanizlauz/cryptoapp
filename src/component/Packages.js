import React from "react";
import { Link } from "react-router-dom";

export default function Packages() {

  const setPlans = (name, price) => {
    //set data with session storage
    let obj = { plan: name, message: price }
    sessionStorage.setItem('myData', JSON.stringify(obj))
    sessionStorage.setItem('fromPlans', "true")
    console.log(obj);
  }
  return (
    <>
      {/* <div className="container-fluid"> */}
        {/* <div className="container p-5"> */}
          <div className="my_alert">
            {" "}
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card card1 h-100">
                <div className="card-body card1">
                  <h5 className="card-title">Basic</h5>
                  <br />
                  <span className="amt text-light">$500</span>/$999
                  <div className="d-grid my-3">
                    <Link to="/deposit">
                      <button className="btn btn-outline-light btn-block"
                        onClick={() => setPlans('Basic', '$500 - $999')}
                      >
                        Select
                      </button>
                    </Link>
                  </div>
                  <ul>
                    <li>24/7 Support</li>
                    <li>3 Days/Trade</li>
                    <li>7 Days</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card card2 h-100">
                <div className="card-body card2">
                  <h5 className="card-title">Silver</h5>
                  <br />
                  <span className="amt text-light">$1000</span>/$5999
                  <br />
                  <div className="d-grid my-3">
                    <Link to="/deposit">
                      <button className="btn btn-outline-light btn-block"
                        onClick={() => setPlans('Silver', '$1000 - $5999')}
                      >
                        Select
                      </button>
                    </Link>
                  </div>
                  <ul>
                    <li>24/7 Support</li>
                    <li>7 Days/Trade</li>
                    <li>14 Days</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card card3 h-100">
                <div className="card-body card3">
                  <h5 className="card-title">Gold</h5>
                  <br />
                  <span className="amt text-light">$6000</span>/$39999
                  <br />
                  <div className="d-grid my-3">
                    <Link to="/deposit">
                      <button className="btn btn-outline-light btn-block"
                        onClick={() => setPlans('Gold', '$6000 - $9999')}
                      >
                        Select
                      </button>
                    </Link>
                  </div>
                  <ul>
                    <li>24/7 Support</li>
                    <li>7 Days/Trade</li>
                    <li>14 Days</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card card4 h-100">
                <div className="card-body card4">
                  <h5 className="card-title">Diamond</h5>
                  <br />
                  <span className="amt text-light">$40,000</span>/$99,999
                  <br />
                  <div className="d-grid my-3">
                    <Link to="/deposit">
                      <button className="btn btn-outline-light btn-block"
                        onClick={() => setPlans('Diamond', '$40,000 - $99,999')}
                      >
                        Select
                      </button>
                    </Link>
                  </div>
                  <ul>
                    <li>24/7 Support</li>
                    <li>14 Days/Trade</li>
                    <li>28 Days</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card card5 h-100">
                <div className="card-body card5">
                  <h5 className="card-title">Platinum</h5>
                  <br />
                  <span className="amt text-light">$100,000</span>/$999,999
                  <br />
                  <div className="d-grid my-3">
                    <Link to="/deposit">
                      <button className="btn btn-outline-light btn-block"
                        onClick={() => setPlans('Platinum', '$100,000 - $999,999')}
                      >
                        Select
                      </button>
                    </Link>
                  </div>
                  <ul>
                    <li>24/7 Support</li>
                    <li>14 Days/Trade</li>
                    <li>28 Days</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-12 mb-4">
              <div className="card card5 h-100">
                <div className="card-body card5">
                  <h5 className="card-title">Premium</h5>
                  <br />
                  <span className="amt text-light">$100,000</span>/$999,999
                  <br />
                  <div className="d-grid my-3">
                    <Link to="/deposit">
                      <button className="btn btn-outline-light btn-block"
                        onClick={() => setPlans('Premium', '$100,000 - $999,999')}
                      >
                        Select
                      </button>
                    </Link>
                  </div>
                  <ul>
                    <li>24/7 Support</li>
                    <li>14 Days/Trade</li>
                    <li>28 Days</li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        {/* </div> */}
      {/* </div> */}

    
    </>
  );
}
