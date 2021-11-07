import React from "react";
import greenleaf from "../assets/greenleaf.webp";
import divider from "../assets/divider.webp";
import yellowFlower from "../assets/yellowFlower.webp";
function Divider() {
  return (
    <div style={{ position: "relative",zIndex:2 }}>
      <img src={divider} style={{ width: "100vw" }} alt="wood-divider" />
      <img
        src={greenleaf}
        className="animate__animated animate__slideInDown"
        style={{
          position: "absolute",
          width: "6.4em",
          left: "10%",
          top: "20%",
          zIndex:3
        }}
        alt="leaf"
      />
      <img
        src={yellowFlower}
        className="animate__animated animate__slideInDown"
        style={{
          width: "2.5em",
          position: "relative",
          right: "-30%",
          bottom: "-4em",
        }}
        alt="smallleaf"
      />
      <img
        src={yellowFlower}
        className="animate__animated animate__slideInDown"
        style={{
          width: "1.5em",
          position: "relative",
          right: "-30%",
          bottom: "2em",
        }}
        alt="smallleaf"
      />
    </div>
  );
}

export default Divider;
