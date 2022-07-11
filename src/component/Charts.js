import React from "react";

export default function Charts() {
  return (
    <>
      <div className="trade_view_container here_on_init">
        <div className="tradingview-widget-container ">
          <div id="technical-analysis dashboard_chart_container" />
          <div
            id="tradingview_66ad7-wrapper"
            style={{
              position: "relative",
              boxSizing: "content-box",
              width: "100%",
              height: "500px",
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
