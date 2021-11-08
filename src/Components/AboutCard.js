import React from "react";
import img_aboutus_5 from "../assets/aboutus5.webp";
import img_aboutus_6 from "../assets/aboutus6.webp";
function AboutCard({ titleImg, para }) {
  console.log(titleImg);
  return (
    <div>
      <img src={titleImg} style={{ position: "relative", top: "-2em" ,"width":"38%"}} />
      <p style={{ padding: "2em 15%", fontSize:"3vw", textAlign:"center",paddingX:"5px 15%" }} className="about_para">{para}</p>
      {titleImg==="/static/media/aboutus7.ef4a6bc4.webp"?<div></div>:<div style={{ position: "relative" }}>
      <img src={img_aboutus_5} style={{ width: "100vw" }} alt="wood" />
        <img
          src={img_aboutus_6}
          style={{
            position: "absolute ",
            bottom: "10%",
            right: "4%",
            width: "5em",
            height: "4em",
          }}
          alt="Leaf"
        />
      </div>}
    </div>
  );
}

export default AboutCard;
