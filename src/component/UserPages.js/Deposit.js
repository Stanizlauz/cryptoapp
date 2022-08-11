import axios from "axios";
import { useEffect, useState } from "react";
import { expiredToken } from "../../Auth/HandleJWT";
import { urlAdminWallet } from "../../endpoints";
import { coins } from "../../enum";
import TradingView from "../TradingView";
import DepositCards from "./DepositCards";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Deposit() {
  const [data, setData] = useState();
  const [wallet, setWallet] = useState([]);
  let fromPlans = sessionStorage.getItem('fromPlans', "true")
  useEffect(() => {
    expiredToken();
    loadWallet();
    getPlans();
    //eslint-disable-next-line
  }, [])
  const loadWallet = async () => {
    await axios.get(urlAdminWallet)
      .then(response => setWallet(response?.data));
  };
  const coin = [
    {
      image: <img src="img/bitcoinimg.png" className="img-responsive" alt="" />,
      coin: wallet?.find(x => x.coin === coins.BTC),
      message: "(Bitcoin network)"
    },
    {
      image: (
        <img src="img/Ethereum-img.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.ETH),
      message: "(ERc 20 network)"

    },
    {
      image: (
        <img src="img/pngwing.com.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.BNB),
      message: "(Bep 20 network)"

    },
    {
      image: (
        <img src="img/tether-usdt-logo.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.USDT),
      message: "(usdt 20 network)"

    },
    {
      image: (
        <img
          src="img/litecoin-ltc-logo.png"
          className="img-responsive"
          alt=""
        />
      ),
      coin: wallet?.find(x => x.coin === coins.LTC),
      message: "(Ltc network)"

    },
    {
      image: (
        <img src="img/xrp-xrp-logo.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.XRP),
      message: "(Ripple network)"

    },
  ];
  const getPlans = () => {
    if (fromPlans === "true") {
      let sessionData = sessionStorage.getItem("myData");
      setData(JSON.parse(sessionData));
    }
  }
  // const getPlans = true;
  // if (getPlans) {

  // }

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
            {/* <h1 className="text-dark">Deposit</h1> */}
            <TradingView />
            <div>
              <h3 className="" style={{ color: 'white', fontWeight: 'bold' }}>Deposit</h3>
            </div>
            <div className="our-webcoderskull" style={{backgroundCilor: 'rgb(9 9 12)'}}>
              <div className="my_alert">
                {fromPlans === "true" &&
                  <div className="alert alert-info mx-2">
                    You have chosen {data?.plan} plan. Please select your desired
                    coin. Note: plan ranges from {data?.message}
                    <i
                      className="font-weight-bolder text-danger float-right mr-2 pointer"
                      id="dismiss_alert_btn"
                    >
                      ×
                    </i>
                  </div>}
                {/* <div className="container"> */}
                  <ul className="row">
                    {coin &&
                      coin?.map((coin) => (
                        <DepositCards
                          image={coin.image}
                          coin={coin.coin?.coin}
                          address={coin.coin?.walletAddress}
                          modalId={coin.coin?.walletAddress}
                          message={coin.message}
                        />
                      ))}
                  </ul>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
