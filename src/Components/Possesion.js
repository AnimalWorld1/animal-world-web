import React from "react";
import possession from "../assets/Possession.png";
import possession1 from "../assets/possession1.webp";

function Possesion() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={possession} alt="possession" style={{width: "12em", height: "5  em" }} />

      <div
        style={{ display: "flex", flexWrap:"wrap",justifyContent: "center", margin: "0 10%" }}
      >
        <img
          src={possession1}
          alt="possession1"
          style={{ width: "7em", height: "10em" ,marginBottom:"0em"}}
        />
        <p
          style={{ fontSize: "0.4em",width:"17em", textAlign: "justify", margin: "0 1em" }}
        >
          Crafting your possession rights will be accompanied by a multiple and
          multi-level perks.          <span className="orangeText">
            {" "}
         THE PLAYER CAN EARN FROM FARM EARNING UPTO 5% WHICH
          WILL BE DISTRIBUTED IN THE FORM OF WAX </span> . In every six months, you can
          visit the site and enjoy a two week stay .WE COVER THE FOOD AND
          accommodation expenditures at the structures built by us – Tree
          Houses, Luxurious Hotels, and others. When the visit comes to an end,
          the  <span className="orangeText">
           return ticket will be sponsored by our team.</span> Possession rights are
          available to a<span className="orangeText"> limited number of players</span>  which will definitely put
          them ahead of the others. This card will be the biggest source of
          earnings throughout the game.
        </p>
      </div>
    </div>
  );
}

export default Possesion;
