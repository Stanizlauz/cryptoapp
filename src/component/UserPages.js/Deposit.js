import React from 'react'
import TradingView from '../TradingView'
import DepositCards from './DepositCards'
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Deposit() {
  const coins = [
    { image: <img src="img/bitcoinimg.png" className="img-responsive" alt />, coin: "Bitcoin" },
    { image: <img src="img/Ethereum-img.png" className="img-responsive" alt />, coin: "Etherum" },
    { image: <img src="img/pngwing.com.png" className="img-responsive" alt />, coin: "BNB" },
    { image: <img src="img/tether-usdt-logo.png" className="img-responsive" alt />, coin: "USDT" },
    { image: <img src="img/litecoin-ltc-logo.png" className="img-responsive" alt />, coin: "Litecoin" },
    { image: <img src="img/xrp-xrp-logo.png" className="img-responsive" alt />, coin: "XRP" }


  ]

  return (
    <>
     <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid"></div>
      <h1 className='text-dark'>Deposit</h1>
      <TradingView />
      <section className="our-webcoderskull padding-lg bg-light">
    <div className="my_alert">
  <div className="alert alert-info">
    You have chosen Basic plan. Please select your desired coin. Note: plan ranges from $500 - $999 <i className="font-weight-bolder text-danger float-right mr-2 pointer" id="dismiss_alert_btn">×</i>
  </div>
</div>

        <div className="container">
          <ul className="row">
            {coins && coins?.map(coin => <DepositCards image={coin.image} coin={coin.coin} />
            )}
          </ul>
        </div>
      </section>
      </div>
      </div>
      </div>
    </>
  )
}
