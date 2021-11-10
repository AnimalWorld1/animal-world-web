import React from "react";
import board from "../assets/board.webp";

function Banner(props) {
  return (
    <>
      <div style={{ position: "relative" ,textAlign: "center"}}>
        <img src={board} alt="board" style={{ width: "9em" }} />
          <div
            style={{
              position: "absolute",
              top: "41%",
              left: "15%",
              fontSize: "1em",
              textShadow: "#ffffff 3px 3px 0px, rgb(0 0 0 / 20%) 6px 6px 0px",
            }}
          >
            {props.titleText}
          </div>
          <div
            style={{
              position: "absolute",
              top: "55%",
              left:"10%",
              fontSize: "0.43em",
              padding: " 13px ​7% 8px 7",
              width: "80%",
            }}
          >
            <p>{props.para}</p>
          </div>
        
      </div>
    </>
  );
}

export default Banner;
