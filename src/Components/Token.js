import React from "react";
import Token1 from "../assets/token1.png";
import TokenBrd from "../assets/tokenBrd.png";
import "../styles/Navbar.css"
function Token() {
  return (
    <div
      style={{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Token1} alt="Token1" style={{ width: "11em" }} />
      <p style={{ fontSize: "0.4em", padding: "0 15% 5%", lineHeight: "1.3" }}>
        A highly prized token in the entire ANIMAL WORLD. It is earned through a
        series of processes. Whenever a particular Tree is planted it will reap
        the respective commodity in a few hours’ time. That commodity is then
        sent for processing and a finished product is manufactured. This
        processed commodity will be then listed for sale in the market. IN
        return the player will receive AWC Tokens.
      </p>
      <div style={{ position: "relative" }}>
        <img src={TokenBrd} alt="tokenbrd" style={{ width: "80%" ,height:"90%"}} />
        <h1
          style={{
            fontSize: "2.8vw",
            color: "#ffbd11",
            position: "absolute",
            top: "1em",
            left: "31.5%",
          }}
        >
          TOTAL SUPPLY- 10,000,000,000
        </h1>
        <p
          
          className="total"
        >
          <div>PLAY TO EARN 25%___________________________2,500,000,000</div>
          <div>RESEARCH & DEVELOPMENT 25% ________2,500,000,000</div>
          <div>
            TEAM 15%_________________________________________1,500,000,000
          </div>
          <div>MARKETING/PROMOTION 13%____________1,300,000,000</div>
          <div>
            private SALE 5%________________________________ 500,000,000
          </div>
          <div>
            IDO 5% ______________________________________________ 500,000,000
          </div>
          <div>legal 5% ___________________________________________ 500,000,000
          </div>
          <div>ADVISOR 5%________________ ______________________500,000,000
          </div>
          <div>AIRDROP & REWARD 2% _____________________ 200,000,000</div>
        </p>
      </div>

      <h1
        style={{
          fontSize: "0.8em",
          padding: "5% 0",
          textShadow: "#ffffff 3px 3px 0px, rgb(0 0 0 / 20%) 6px 6px 0px",
          color: "cadetblue",
        }}
      >
        USECASE OF AWC TOKEN
      </h1>

      <ol
        style={{
          fontSize: "0.4em",
          padding: "0 25%",
          textAlign:"left",
          textShadow: "#ffffff 3px 3px 0px, rgb(0 0 0 / 20%) 6px 6px 0px",
        }}
      >
        <li style={{ padding: "3%" }}>
          Useful for buying in-game machinery for instance - Bakery, Dairy, BBQ,
          Juicer, etc.{" "}
        </li>

        <li style={{ padding: "3%" }}>
          It also allows a player to buy real product from the live farm
          location at our marketplace. The buyer can also place online orders
          for them.{" "}
        </li>

        <li style={{ padding: "3%" }}>
          {" "}
          Staking AWC tokens has its own benefits like the player will get free
          coupon tickets while purchasing farm products.{" "}
        </li>
      </ol>
    </div>
  );
}

export default Token;
