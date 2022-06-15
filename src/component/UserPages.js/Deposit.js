import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { urlAdminWallet } from "../../endpoints";
import { coins } from "../../enum";
import TradingView from "../TradingView";
import DepositCards from "./DepositCards";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Deposit() {
  const {
    // register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [wallet, setWallet] = useState([]);
  useEffect(() => {
    loadWallet();
  }, [])
  const loadWallet = async () => {
    await axios.get(urlAdminWallet)
      .then(response => setWallet(response?.data));
  };
  const coin = [
    {
      image: <img src="img/bitcoinimg.png" className="img-responsive" alt="" />,
      coin: wallet?.find(x => x.coin === coins.BTC),
      // address: "btcjhdjdkdiirirkf",
    },
    {
      image: (
        <img src="img/Ethereum-img.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.ETH),
      // address: "ethytthgjfkfkvnnhdrdkd",
    },
    {
      image: (
        <img src="img/pngwing.com.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.BNB),
      // address: "bnbfgddjdkkirhrn4848rnn",
    },
    {
      image: (
        <img src="img/tether-usdt-logo.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.USDT),
      // address: "usadfjfjfggklkgl998jjgd",
    },
    {
      image: (
        <img
          src="img/litecoin-ltc-logo.png"
          className="img-responsive"
          alt=""
        />
      ),
      coin:wallet?.find(x => x.coin === coins.LTC),
      // address: "xrprkgjjdldkfnvfjffkk595",
    },
    {
      image: (
        <img src="img/xrp-xrp-logo.png" className="img-responsive" alt="" />
      ),
      coin: wallet?.find(x => x.coin === coins.XRP),
      // address: "ltw333kgjggidpgdggdj",
    },
  ];

  const getPlans = true;
  let data;
  if (getPlans) {
    data = sessionStorage.getItem("myData");
    data = JSON.parse(data);
  }

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid"></div>
            <h1 className="text-dark">Deposit</h1>
            <TradingView />
            <section className="our-webcoderskull padding-lg bg-light">
              <div className="my_alert">
                <div className="alert alert-info mx-2">
                  You have chosen {data?.plan} plan. Please select your desired
                  coin. Note: plan ranges from {data?.message}
                  <i
                    className="font-weight-bolder text-danger float-right mr-2 pointer"
                    id="dismiss_alert_btn"
                  >
                    ×
                  </i>
                </div>
                <div className="container">
                  <ul className="row">
                    {coin &&
                      coin?.map((coin) => (
                        <DepositCards
                          image={coin.image}
                          coin={coin.coin?.coin}
                          address={coin.coin?.walletAddress}
                          modalId={coin.coin?.walletAddress}
                        />
                      ))}
                  </ul>
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
