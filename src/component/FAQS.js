import React from "react";
import Footer from "./Footer";
import Headerss from "./Headerss";

export default function FAQS() {
  return (
    <>
      <Headerss />
      <div className="container-fluid">
  <div className="row">
    <div className="col-xl-12 pa-0">
      <div className="faq-search-wrap bg-teal-light-3">
        <div className="container">
          <h1 className="display-5 text-white mb-20">Frequently asked questions.</h1>
          <div className="form-group w-100 mb-0">
          </div>
        </div>
      </div>
      <div className="container mt-sm-60 mt-30">
        <div className="hk-row">
          <div className="col-xl-8">
            <div className="card card-lg">
              <h3 className="card-header border-bottom-0 text-dark">
               Questions !
              </h3>
              <div className="accordion accordion-type-2 accordion-flush" id="accordion_2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between activestate">
                    <a role="button" data-toggle="collapse" href="#collapse_1i" aria-expanded="true">What methods are available for depositing funds into my account ?</a>
                  </div>
                  <div id="collapse_1i" className="collapse show" data-parent="#accordion_2" role="tabpanel">
                    <div className="card-body pa-15 text-dark">The methods available for funding your account are by cryptocurrency (Bitcoin, Ethereum and Litecoin and many more). We do not accept Fiat on our trading platform as we are fully a cryptocurrency organisation.</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_2i" aria-expanded="false">What document do i need to provide when opening an account ?</a>
                  </div>
                  <div id="collapse_2i" className="collapse" data-parent="#accordion_2">
                    <div className="card-body pa-15 text-dark">You will need to provide a copy of a valid government-issued ID. (Passport, driver’s license, ID card).</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_3i" aria-expanded="false">Does uploading my document automatically get my account verified ?</a>
                  </div>
                  <div id="collapse_3i" className="collapse" data-parent="#accordion_2">
                    <div className="card-body pa-15 text-dark">Immediately you upload your document, we would process it for verification and a success or denied notification would be sent to you by mail.</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_4i" aria-expanded="false"> What are the available means of withdrawal ?</a>
                  </div>
                  <div id="collapse_4i" className="collapse" data-parent="#accordion_2">
                    <div className="card-body pa-15 text-dark">To withdraw from your balance, you will have to provide a wallet address (Bitcoin, Bitcoin cash, Ethereum, Litecoin).</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_5i" aria-expanded="false"> What can i trade trade with Cryptontrades ?</a>
                  </div>
                  <div id="collapse_5i" className="collapse" data-parent="#accordion_2">
                    <div className="card-body pa-15 text-dark">(Bitcoin, Bitcoin cash, Ethereum, Litecoin etc...).</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_6i" aria-expanded="false">Terms and Conditions</a>
                  </div>
                  <div id="collapse_6i" className="collapse" data-parent="#accordion_2">
                    <div className="card-body pa-15 text-dark"> Upon executing this Agreement, you will become a Member of BobbieCoinz. In the event that you make an investment in securities through the Platform, you will also become a client of BC. BC will advise you of the type of client you are for regulatory purposes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}
