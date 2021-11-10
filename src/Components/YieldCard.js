import React from "react";
import Yieldcard from "../assets/yeildCard.png";
import Yieldcard1 from "../assets/yieldCard1.webp";

function YieldCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={Yieldcard} alt="yieldcard" style={{ width: "11em" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 18%",
          alignItems: "center",
        }}
      >
        <img src={Yieldcard1} alt="Yieldcard1" style={{ width: "7em",height:"8em" }} />
        <p cl style={{ fontSize: "0.5em",textAlign: "justify", margin: "3em 1em" }}>
          THIS CARD REPRESENTS THe COMMISSION EARNED ON THE TRADING ACTIVITY.
          HOLDERS OF THIS CARD WILL EARN DIVIDENDS UPTO 1% OF NET PROCEEDS IN
           WAX WHICH WILL BE DISTRIBUTED IN SELECTED INTERVALS.
        </p>
      </div>
    </div>
  );
}

export default YieldCard;
