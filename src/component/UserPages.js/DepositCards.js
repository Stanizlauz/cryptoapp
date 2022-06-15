import React from "react";
import { Link } from "react-router-dom";


export default function DepositCards({ image, coin}) {
 

  // const [value, setValues] = useState({
  //   bitcoin: "btcjhdjdkdiirirkf",
  //   ethereum: "ethytthgjfkfkvnnhdrdkd",
  //   bnb: "bnbfgddjdkkirhrn4848rnn",
  //   usdt: "usadfjfjfggklkgl998jjgd",
  //   xrp: "xrprkgjjdldkfnvfjffkk595",
  //   litecoin: "ltw333kgjggidpgdggdj"
  // });


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
                data-target="#exampleModal"
              >
                Continue
               </a>
            </div>
          </div>
        </div>
      </li>
     
    </>
  );
}
