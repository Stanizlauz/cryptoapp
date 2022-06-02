import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutTeamSecond() {
  return (
    <>
  <section className="team section">
  <div className="container">
    <h1 className="section-title2">Our Team</h1>
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/joandav.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Joan Davies</h3>
                <p>Crypto Expert</p>
                {/* <a href="https://t.me/Stanizlauz" aria-hidden="true"><i className="fa-telegram" /></a> */}
              </div>
              <div className="social">
                <a href="https://t.me/Stanizlauz"><i className="ti ti-comment" aria-hidden="true"></i></a>
                {/* <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a> */}
                {/* <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
              </div>
              
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/denise-thompson.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Anita Jenna</h3>
                <p>Crypto Expert</p>
              </div>
              <div className="social">
                {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
                <a href="https://t.me/Denisethompson"><i className="ti ti-comment" aria-hidden="true"></i></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/anitajenna.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Ms Denise Thompson</h3>
                <p>Crypto Expert</p>
              </div>
              <div className="social">
                <a href="https://t.me/Denisethompson"><i className="ti ti-comment" aria-hidden="true"></i></a>
                {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
              </div>
            </figcaption>
          </figure>
          <Link to="/about">
          <button type="button" className="team-button">
                          More about us.
                        </button>
          </Link>
          
        </div>
      </div>
      {/* <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/helen.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Helen Williams</h3>
                <p>Crypto Expert</p>
              </div>
              <div className="social">
                <a href="https://t.me/experthelen"><i className="ti ti-comment" aria-hidden="true"></i></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div> */}
      {/* <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/evelyn.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Evelyn Smith</h3>
                <p>Crypto Expert</p>
              </div>
              <div className="social">
                <a href="https://t.me/evelynsmith"><i className="ti ti-comment" aria-hidden="true"></i></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div> */}
      {/* <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="https://i.imgur.com/J6l19aF.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Michael Slater</h3>
                <p>Marketing Manager</p>
              </div>
              <div className="social">
                <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div> */}
    </div>
  </div>
</section>

    </>
  )
}
