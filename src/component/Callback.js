import React from 'react'

export default function Callback() {
  return (
    <>
   <section className="callback_section">
  <div className="container">
    <div className="row">
      <div className="callback_men" />
      <div className="col-lg-6 offset-lg-6">
        <div className="cb_wrapper">
          <h2>Request A <span>Call Back</span></h2>
          <p>Please don’t hesitate to chat with me just drop a line.</p>
          <form action="contact.php" method="post" id="ajax_form" className="form-horizontal cb-form">
            <div className="row form-group">
              <div className="col-sm-6">
                <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-sm-6">
                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-12">
                <textarea id="message" name="message" cols={30} rows={5} className="form-control" placeholder="Message" required defaultValue={""} />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <button id="submit" className="button_1" type="submit">Submit Now</button>
              </div>
            </div>
            <div id="form-messages" className="alert" role="alert" />
          </form>
        </div>{/* /.contact_form */}
      </div>
    </div>
  </div>
</section>{/* Call Back Section */}

    </>
  )
}
