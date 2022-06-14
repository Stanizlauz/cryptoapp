import React from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_33x5rne', 'template_kh9sg39', e.target, 'user_3Qmrr6MR0vYHh7GiRvOW9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};

  return (
    <>
  <section id="contact" className="contact_section bd-bottom padding">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 xs-padding">
        <div className="contact_info">
          <h2>Contact Information</h2>
          <ul>
            <li><i className="ti-envelope" /><span>Mail:</span> service.capitaltrades@hotmail.com</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 xs-padding">
        <div className="contact_form">
          <h2>Send Us Message</h2>
          <p>Please don’t hesitate to chat with me just drop a line.</p>
          <form onSubmit={sendEmail} className="form-horizontal">
            <div className="form-group row">
              <div className="col-sm-6">
                <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-sm-6">
                <input type="email" id="email" name="user_email" className="form-control" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <textarea id="message" name="message" className="form-control" placeholder="Message" required defaultValue={""} />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <button className="button_1" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>{/* /.contact_form */}
      </div>
    </div>
  </div>
</section>{/* /.Contact Section */}

    </>
  )
}
