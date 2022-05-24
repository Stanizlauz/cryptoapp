import React from 'react'
import Packages from './Packages'

export default function Pricing() {
  return (
    <>
 <section className="pricing_section padding">
  <div className="container">
    <div className="section_heading align-center mb-40">
      <h2><span>Packages</span></h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />It has survived not only five centuries.</p>
    </div>{/* /Section Heading */}
    <Packages />
  </div>
</section>{/* Pricing Section */}

    </>
  )
}
