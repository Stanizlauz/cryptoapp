import React from "react";

export default function Charts() {
  return (
    <>
      {/* <div
        class="cryptohopper-web-widget"
        data-id="3"
        data-coins="bitcoin,ethereum,tether,binance-coin,xrp,litecoin"
        data-realtime="on"
      ></div> */}
      <div
        className="cryptohopper-web-widget"
        data-id={3}
        data-coins="bitcoin,ethereum,tether,binance-coin,xrp,litecoin"
        data-realtime="on"
      >
        <div className="cryptoboxes row mt-1" id="mcw-3" data-realtime="on">
          <a
            href="https://www.cryptohopper.com/currencies/detail?currency=BTC"
            target="_blank"
            className="mcw-tr mcw-link mcw-card mcw-card-1 mcw-white-theme mcw-rounded col-sm-4"
          >
            <div className="bg">
              <img
                alt="bitcoin"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              />
            </div>
            <div className="mcw-card-head">
              <div>
                <img
                  alt="bitcoin"
                  src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
                />
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Bitcoin (BTC)
                </p>
              </div>
            </div>
            <div
              className="mcw-pricelabel"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Price
            </div>
            <div
              className="mcw-price mcw-animated livedown"
              data-price="20703.14"
              data-live-price="bitcoin"
              data-rate={1}
            >
              $ <span>20,703.14</span>
            </div>
          </a>
          <a
            href="https://www.cryptohopper.com/currencies/detail?currency=ETH"
            target="_blank"
            className="mcw-tr mcw-link mcw-card mcw-card-1 mcw-white-theme mcw-rounded col-sm-4"
          >
            <div className="bg">
              <img
                alt="ethereum"
                src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
              />
            </div>
            <div className="mcw-card-head">
              <div>
                <img
                  alt="ethereum"
                  src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
                />
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Ethereum (ETH)
                </p>
              </div>
            </div>
            <div
              className="mcw-pricelabel"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Price
            </div>
            <div
              className="mcw-price mcw-animated livedown"
              data-price="1129.23"
              data-live-price="ethereum"
              data-rate={1}
            >
              $ <span>1,129.23</span>
            </div>
          </a>
          <a
            href="https://www.cryptohopper.com/currencies/detail?currency=USDT"
            target="_blank"
            className="mcw-tr mcw-link mcw-card mcw-card-1 mcw-white-theme mcw-rounded col-lg-2 col-sm-4"
          >
            <div className="bg">
              <img
                alt="tether"
                src="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"
              />
            </div>
            <div className="mcw-card-head">
              <div>
                <img
                  alt="tether"
                  src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707"
                />
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Tether (USDT)
                </p>
              </div>
            </div>
            <div
              className="mcw-pricelabel"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Price
            </div>
            <div
              className="mcw-price mcw-animated livedown"
              data-price="0.999138"
              data-live-price="tether"
              data-rate={1}
            >
              $ <span>0.999138</span>
            </div>
          </a>
          <a
            href="https://www.cryptohopper.com/currencies/detail?currency=BNB"
            target="_blank"
            className="mcw-tr mcw-link mcw-card mcw-card-1 mcw-white-theme mcw-rounded col-lg-2 col-md-12 mb-4"
          >
            <div className="bg">
              <img
                alt="binance-coin"
                src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
              />
            </div>
            <div className="mcw-card-head">
              <div>
                <img
                  alt="binance-coin"
                  src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850"
                />
                <p
                  style={{
                    color: "black",
                  }}
                >
                  BNB (Binance SmartChain)
                </p>
              </div>
            </div>
            <div
              className="mcw-pricelabel"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Price
            </div>
            <div
              className="mcw-price mcw-animated livedown"
              data-price="215.93"
              data-live-price="binance-coin"
              data-rate={1}
            >
              $ <span>215.93</span>
            </div>
          </a>
          <a
            href="https://www.cryptohopper.com/currencies/detail?currency=XRP"
            target="_blank"
            className="mcw-tr mcw-link mcw-card mcw-card-1 mcw-white-theme mcw-rounded col-lg-2 col-md-12 mb-4"
          >
            <div className="bg">
              <img
                alt="xrp"
                src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
              />
            </div>
            <div className="mcw-card-head">
              <div>
                <img
                  alt="xrp"
                  src="https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1605778731"
                />
                <p
                  style={{
                    color: "black",
                  }}
                >
                  XRP (Ripple)
                </p>
              </div>
            </div>
            <div
              className="mcw-pricelabel"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Price
            </div>
            <div
              className="mcw-price mcw-animated livedown"
              data-price="0.323883"
              data-live-price="xrp"
              data-rate={1}
            >
              $ <span>0.323883</span>
            </div>
          </a>
          <a
            href="https://www.cryptohopper.com/currencies/detail?currency=LTC"
            target="_blank"
            className="mcw-tr mcw-link mcw-card mcw-card-1 mcw-white-theme mcw-rounded col-lg-2 col-md-12 mb-4"
          >
            <div className="bg">
              <img
                alt="litecoin"
                src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
              />
            </div>
            <div className="mcw-card-head">
              <div>
                <img
                  alt="litecoin"
                  src="https://assets.coingecko.com/coins/images/2/small/litecoin.png?1547033580"
                />
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Litecoin (LTC)
                </p>
              </div>
            </div>
            <div
              className="mcw-pricelabel"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Price
            </div>
            <div
              className="mcw-price"
              data-price="52.51"
              data-live-price="litecoin"
              data-rate={1}
            >
              $ <span>52.51</span>
            </div>
          </a>
        </div>
        <a
          href="https://www.cryptohopper.com/"
          title="Powered by Cryptohopper"
          target="_blank"
          rel="noreferrer noopener"
          className="pull-right"
        >
          <img
            src="https://static.cryptohopper.com/images/logo/logo-light.svg"
            alt="Cryptohopper"
            style={{ height: 33, width: "100%", margin: "5px 0" }}
          />
        </a>
      </div>
    </>
  );
}
