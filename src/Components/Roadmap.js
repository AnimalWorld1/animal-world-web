import React from "react";
import Roadmap1 from "../assets/roadmap.png";
import RoadmapBrd from "../assets/roadMapbrd.webp";
import checktick from "../assets/checktick.webp"
function Roadmap() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position:"relative",
        fontSize:'2.4vw',whiteSpace:"nowrap",color:"white"
      }}
    >
      <img className="rimg" src={Roadmap1} alt="roadmap" />
      <div style={{position:"relative"}}>
      <img className="rmimg" src={RoadmapBrd} alt="roadmapbrd"  />
      {/* <p style={{,position:"absolute"}}> */}
      <div className="rmap" style={{marginBottom:"1%",position:"absolute",top:"22%",left:"22%"}}>PHASE 1 : 2021 Q3 & Q4</div>
      <div className="rmap" style={{position:"absolute",top:"28%",left:"8%"}}>
      <div>WEBSITE DEVELOPMENT ___________________ <img src={checktick} style={{width:"1em"}}alt="checked" /></div>
        <div>TREE SALE_______________________________________</div>
      </div>
        <div className="rmap" style={{position:"absolute",top:"51%",left:"8%"}}>
        <div>LAND REVEAL __________________________________</div>
       <div> ANIMAL SALE__________________________________</div>
       <div>LAND SALE_______________________________________</div>
       </div>
        <div className="rmap" style={{position:"absolute",top:"78%",left:"8%"}}>
        <div>PASSIVE EARNING(FARM)__________________</div>
        <div>EPISODE 1________________________________________</div>
        <div>SOMETHING SPECIAL_________________________</div>
        </div>
      {/* </p> */}
      </div>
    </div>
  );
}

export default Roadmap;
