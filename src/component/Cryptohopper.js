import React from "react";

export default function Cryptohopper() {
  return (
    <>
      <div className="all_chart">
        <div
          className="tradingview-widget-copyright"
          style={{ width: "100%", height: "700px" }}
        >
          <iframe
            allowTransparency="true"
            frameBorder={0}
            src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22cryptontrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
            style={{ boxSizing: "border-box", height: "100%", width: "100%" }}
          />
        </div>
      </div>

      <div className="trade_view_container here_on_init">
        <div className="tradingview-widget-container ">
          <div id="technical-analysis dashboard_chart_container" />
          <div
            id="tradingview_66ad7-wrapper"
            style={{
              position: "relative",
              boxSizing: "content-box",
              width: "100%",
              height: "100%",
              margin: "0 auto !important",
              padding: "0 !important",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif',
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                padding: "0 !important",
              }}
            >
              <iframe
                id="tradingview_66ad7"
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_66ad7&symbol=AAPL&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=0&toolbarbg=f1f3f6&studies=ROC%40tv-basicstudies%1FStochasticRSI%40tv-basicstudies%1FMASimple%40tv-basicstudies&theme=dark&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&showpopupbutton=1&locale=en&utm_source=cryptontrades.com&utm_medium=widget&utm_campaign=chart&utm_term=AAPL"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0 !important",
                  padding: "0 !important",
                }}
                frameBorder={0}
                allowTransparency="true"
                scrolling="no"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
