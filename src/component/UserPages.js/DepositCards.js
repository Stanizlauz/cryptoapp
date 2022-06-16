import axios from "axios";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useForm } from "react-hook-form";
import { urlTransaction } from "../../endpoints";
import { depositFormData } from "../../Utils/FormData";


export default function DepositCards({ image, coin, address, modalId }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  };

  const depositCoin = async (data) => {
    try {
      data.coin = selectCoin
      data.picture = data.picture[0]
      const formData = depositFormData(data);
      await axios.post(urlTransaction, formData);
    } catch (error) {
      console.log(error);
    }
  };
  const selectedCoin = (coi) => {
    setSelectCoin(coi)
  }
  const [copied, setCopied] = useState(false);
  const [selectCoin, setSelectCoin] = useState()
  return (
    <>
      <li className="col-12 col-md-6 col-lg-3">
        <div className="cnt-block equal-hight" style={{ height: 349 }}>
          <figure>{image}</figure>
          <div className="p-4">
            <div className="font-weight-bolder" style={{ color: "black" }}>
              {coin}
            </div>
            <div className="mt-2" style={{ color: "#666666" }}>
              Deposit using {coin}
            </div>
            <div className="mt-4">
              <a
                className="btn btn-primary pointer text-white"
                data-toggle="modal"
                data-target={`#${modalId}`}
                onClick={() => selectedCoin(coin)}
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </li>


      <div>
        {/* Button trigger modal */}
        {/* Modal */}
        <div
          className="modal fade"
          id={modalId}
          tabIndex={-1}
          role="dialog"
          aria-labelledby={`${modalId}Label`}
          aria-hidden="true"
        >
          <form>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`${modalId}Label`}>
                    Deposit
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-outline mb-4 text-dark">
                    <label
                      className="form-label text-dark font-weight-bold"
                      htmlFor="amountDeposited"
                    >
                      Enter amount{" "}
                      <span className="text-danger">*</span>
                      {errors.amountDeposited && (
                        <span className="text-danger font-weight-bold">
                          {" "}
                          Minimum $500
                        </span>
                      )}
                    </label>
                    <input
                      type="number"
                      placeholder="Eg.2500 (Min $500)"
                      id="amountDeposited"
                      className="form-control"
                      onChange={(e) => handleOnChange(e)}
                      {...register("amountDeposited", {
                        required: true,
                      })}
                    />
                  </div>
                  <hr />
                  <div className="">
                    <textarea
                      readOnly
                      rows={1}
                      cols={50}
                      style={{ maxWidth: "100%" }}
                      className=" text-dark"
                      value={address}
                    // onChange={setCopied(true)}
                    />

                  </div>
                  <div className="mb-1 ml-3">
                    <small
                      className="text-info pointer"
                      id="text_infild"
                    >
                      Copy address to clipboard{" "}
                      <CopyToClipboard
                        text={address}
                        onCopy={() => setCopied(true)}
                      >
                        <i className="fas fa-copy text-dark ml-2" />
                      </CopyToClipboard>
                      {copied ? (
                        <span className="text-success ml-2">
                          Copied.
                        </span>
                      ) : null}
                    </small>
                  </div>
                  <hr />
                  <div className="mt-3 mb-3 text-dark">
                    In order to confirm payment. A proof of payment
                    have to be uploaded.
                  </div>
                  <div className="form-group">
                    <label className="text-dark" htmlFor="picture">
                      Upload proof of payment
                    </label>
                    <input
                      className="text-dark"
                      id="picture"
                      name="picture"
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handleOnChange(e)}
                      {...register("picture", {
                        required: true,
                      })}
                    />
                  </div>
                  {/* <h5
                  value={value}
              
                  className="text-dark"
                >
                  btc5463jwkwiwih
                  <CopyToClipboard
                    text={value}
                    onCopy={() => setCopied( true)}>
                    <i className="fas fa-copy text-dark ml-2" />
                  </CopyToClipboard>
                  {copied ? <span className="text-success ml-2">Copied.</span> : null}
                </h5> */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit(depositCoin)}
                    className="btn btn-primary"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
