import React from "react";
import img_aboutus_5 from "../assets/aboutus5.webp";
import img_aboutus_6 from "../assets/aboutus6.webp";
function AboutCard({ titleImg, para }) {
  console.log(titleImg);
  return (
    <div>
      <h1></h1>
      <img src={titleImg} style={{ position: "relative" ,"width":"38%"}} />
      <p style={{ padding: "1em 2%", paddingX:"5px 15%" }} className="about_para">{para}</p>
    </div>
  );
}

export default AboutCard;
