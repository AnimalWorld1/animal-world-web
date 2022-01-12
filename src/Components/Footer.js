import React from "react";
import Logo2 from "../assets/logo2.webp";
import Twitter from "../assets/twitter.webp";
import Telegram from "../assets/telegram.webp";
import OwnMssg from "../assets/ownMssg.webp";
import Insta from "../assets/insta.webp";
import img_aboutus_5 from "../assets/aboutus5.png";

function Footer() {
  return (
    <div
      style={{
        background: "#f9dc5554",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zindex:3
      }}
    >
      
      <img src={Logo2} alt="logo2" />
      <h2 style={{fontSize:"2vw"}}>FOLLOW US ON SOCIAL MEDIA</h2>
      <h3 style={{fontSize:"1.7vw"}}>stay up-to-date with the latest in ANIMAL WORLD</h3>
      <div>
        <a href="https://twitter.com/animalworldwax?t=tuy6WxG7Xq2AigaGZasE_g&s=09" target="_blank">
          <img src={Twitter} alt="twitter" style={{ width: "2.5em" }} />
        </a>
        <a href="https://t.me/animalworldwax" target="_blank">
          <img src={Telegram} alt="telegram" style={{ width: "2.5em" }} />
        </a>
        <a href="https://medium.com/@animalworldwax" target="_blank">
          <img src={OwnMssg} alt="OwnMsg" style={{ width: "2.5em" }} />
        </a>
        <a href="https://www.instagram.com/animalworldwax/?utm_medium=copy_link" target="_blank">
          <img src={Insta} alt="insta" style={{ width: "2.5em" }} />
        </a>
      </div>
      <a
        href="https://www.smstechcorp.com/"
        target="_blank"
        class="btnC"
      >
        <span>Company Info</span>
      </a>
      <p
        style={{
          margin: "3% 22%",
          fontFamily: "poppins-extralight, poppins, sans-serif",
          textAlign: "center",
        }}
      >
        All rights reserved by: SMS Tech Corp., REG NR: 890515712
      </p>
      <p
        style={{
        fontFamily: "poppins-extralight, poppins, sans-serif",
          textAlign: "center",
        }}
      >
        Address:Commercial II ,  Lodha road , Naya nagar ,Opposite Laxmi park, Mira road east.
        Mumbai 401107.India.
      </p>
       <a style={{"color":"black","text-decoration": "none"}} href="mailto:smstechcorp@gmail.com?subject=subject"> &nbsp;&nbsp;smstechcorp@gmail.com&nbsp;&nbsp; </a>
      <p>© 2021 Animalworld.io All rights reserved</p>
    </div>
  );
}

export default Footer;
