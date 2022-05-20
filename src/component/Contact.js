import React from 'react'

export default function Contact() {
  return (
    <>
   <section className="contact_section bd-bottom padding">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 xs-padding">
        <div className="contact_info">
          <h2>Contact Information</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <ul>
            <li><i className="ti-mobile" /><span>Call:</span> +88 023 524 0251</li>
            <li><i className="ti-envelope" /><span>Mail:</span> Cryptocoin@yourmail.com</li>
            <li><i className="ti-location-arrow" /><span>Address:</span>  692 Eagle Lane Duluth, Australia.</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 xs-padding">
        <div className="contact_form">
          <h2>Send Us Message</h2>
          <p>Please don’t hesitate to chat with me just drop a line.</p>
          <form action="contact.php" method="post" id="ajax_form" className="form-horizontal">
            <div className="form-group row">
              <div className="col-sm-6">
                <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-sm-6">
                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <textarea id="message" name="message" className="form-control" placeholder="Message" required defaultValue={""} />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <button id="submit" className="button_1" type="submit">Send Message</button>
              </div>
            </div>
            <div id="form-messages" className="alert" role="alert" />
          </form>
        </div>{/* /.contact_form */}
      </div>
    </div>
  </div>
</section>{/* /.Contact Section */}

    </>
  )
}
