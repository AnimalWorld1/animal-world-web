import React from "react";
import Logo2 from "../assets/logo2.webp";
import Twitter from "../assets/twitter.webp";
import Telegram from "../assets/telegram.webp";
import OwnMssg from "../assets/ownMssg.webp";
import Insta from "../assets/insta.webp";

function Footer() {
  return (
    <div
      style={{
        background: "#e1e2dd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Logo2} alt="logo2" />
      <h2 style={{fontSize:"2vw"}}>FOLLOW US ON SOCIAL MEDIA</h2>
      <h3 style={{fontSize:"1.7vw"}}>stay up-to-date with the latest in ANIMAL WORLD</h3>
      <div>
        <a href="https://twitter.com/DreamFarm_">
          <img src={Twitter} alt="twitter" style={{ width: "2.5em" }} />
        </a>
        <a href="https://t.me/dreamfarmwax">
          <img src={Telegram} alt="telegram" style={{ width: "2.5em" }} />
        </a>
        <a href="https://medium.com/@dreamfarmwax">
          <img src={OwnMssg} alt="OwnMsg" style={{ width: "2.5em" }} />
        </a>
        <a href="https://www.instagram.com/dreamfarmwax/">
          <img src={Insta} alt="insta" style={{ width: "2.5em" }} />
        </a>
      </div>

      <p
        style={{
          margin: "3% 22%",
          fontFamily: "poppins-extralight, poppins, sans-serif",
          textAlign: "center",
        }}
      >
        All rights reserved by: SMS Tech Corp., REG NR: 890515712/ PS Ward/
        Commercial II ,Under Maharashtra Shops and Establishment Act of 2017. De
        Elmas Sonawala Cross Road no 2 , Sonawala Industrial Estate, Goregaon
        EAST, Maharashtra, Mumbai- 400063.
      </p>
      <p>© 2021 Animalworld.io All rights reserved</p>
    </div>
  );
}

export default Footer;
