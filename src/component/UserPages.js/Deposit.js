import React from 'react'
import TradingView from '../TradingView'
import DepositCards from './DepositCards'

export default function Deposit() {
  const coins = [
    { image: <img src="img/denise-thompson.jpg" className="img-responsive" alt />, coin: "Bitcoin" },
    { image: <img src="http://www.webcoderskull.com/img/team1.png" className="img-responsive" alt />, coin: "Etherum" },
    { image: <img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt />, coin: "Cardano" }
  ]

  return (
    <>
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
    </>
  )
}
