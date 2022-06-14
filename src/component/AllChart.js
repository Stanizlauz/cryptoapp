import React from "react";

export default function AllChart() {
  
  return (
    <>
{/* TradingView Widget BEGIN */}
<div className="tradingview-widget-container" style={{height: '100%', width: '100%'}}>
  <div className="tradingview-widget-container__widget" />
  <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span className="blue-text">Cryptocurrency Markets</span></a> by TradingView</div>
</div>
{/* TradingView Widget END */}



      {/* <div className="all_chart">
        <div
          style={{
            height: 787,
            backgroundColor: "#1D2330",
            overflow: "auto !important",
            boxSizing: "border-box",
            border: "1px solid #282E3B",
            borderRadius: 4,
            textAlign: "right",
            lineHeight: 14,
            fontSize: 12,
            fontFeatureSettings: "normal",
            textSizeAdjust: "100%",
            boxShadow: "inset 0 -20px 0 0 #262B38",
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              height: 767,
              padding: 0,
              margin: 0,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=12&pref_coin_id=1505&graph=yes"
              width="100%"
              height="763px"
              scrolling="auto"
              aria-hidden="true"
              title="coinlib"
              marginWidth={0}
              marginHeight={0}
              frameBorder={0}
              border={0}
              style={{ border: 0, margin: 0, padding: 0 }}
            >
              {" "}
            </iframe>
          </div>
        </div>
      </div> */}
    </>
  );
}
