import React from "react";

export default function Cryptohopper() {
  return (
    <>
      <div className="all_chart">
        <div
          className="cryptohopper-web-widget"
          data-id={1}
          data-chart_color="#3a5666"
          data-table_style="dark"
          data-realtime="on"
          data-table_length={22}
        />
      </div>
    </>
  );
}
