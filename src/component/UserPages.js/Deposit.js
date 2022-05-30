import React from 'react'
import TradingView from '../TradingView'
import DepositCards from './DepositCards'
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Deposit() {
  const coins = [
    { image: <img src="img/bitcoinimg.png" className="img-responsive" alt />, coin: "Bitcoin" },
    { image: <img src="img/Ethereum-img.png" className="img-responsive" alt />, coin: "Etherum" },
    { image: <img src="img/ada_cardano_img.png" className="img-responsive" alt />, coin: "Cardano" },
    { image: <img src="img/tron-img.png" className="img-responsive" alt />, coin: "Tron" }

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
