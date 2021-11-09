import React from "react";
import "../styles/Navbar.css";;
function PlayCard({text_c,bannerStyle, title_img, para,commonImg }) {
  return (
    <div
      className="mySlides fade"
      style={{
        background: bannerStyle,
        width: "100%",
        height: "13.5em",
        objectFit: "cover",
        objectPosition: "50% 50%",
      }}
    >
      <div
        style={{
          display: "flex",
          zIndex: 3,
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img
          src={commonImg}
          style={{
            position: "absolute",
            width: "13em",
            marginBottom:"1em",
            top: "1%",
          }}
        />
        <img
          src={title_img}
          style={{
            height: "6em",
            width: "4.5em",
            position: "absolute",
            top: "5em",
            left: "13%",
          }}
          className="episodes-title"
        />
        <p
          class="paratext"
          style={{
            color: text_c,
            height: "50%",
            width: "40%",
            position: "absolute",
            top: "50%",
            left: "55%",
            textAlign: "justify",
          }}
        >
          {para}
        </p>
      </div>
    </div>
  );
}

export default PlayCard;
