import React from "react";
import mohammed from "../assets/mo.png"
import qa from "../assets/vol.png"
import marcus from "../assets/ma.png"
import fahad from "../assets/fahad.png"
import linkedin from "../assets/linkedin.png"
import team_img from "../assets/TEAM.png"


function Team() {
  return (
    
      <div>
      <img className="rimg" src={team_img} alt="roadmap"  />

      < div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',padding:'50px 0px'}}>

      <div style={{width:"300px"}}>
  <img className="team-img" src={fahad} alt="mohammed" />
  <p className="team-txt">SHADOW</p>
  <p className="team-txt1">FOUNDER</p>
  <a href="https://www.linkedin.com/mwlite/in/fahad-ansari-890ab2226/" target="_blank"><img className="team-data" src={linkedin} alt="mohammed" /></a>
</div>

<div  style={{width:"300px"}}>
  <img className="team-img"  src={mohammed} alt="mohammed" />
  <p className="team-txt" >MOHAMMAD SOHEL SHAIKH</p>
  <p className="team-txt1">CEO</p>
  <a href="https://www.linkedin.com/in/mohammad-sohel-shaikh-225989221/" target="_blank"><img className="team-data" src={linkedin} alt="mohammed" /></a>
</div>

<div style={{width:"300px"}}>
  <img className="team-img" src={qa} alt="mohammed" />
  <p className="team-txt">VOLODYMYR DOBROVOLSKYI</p>
  <p className="team-txt1">QA ENGINEER</p>
  <a href="https://www.linkedin.com/in/vova-dobrovolskiy/" target="_blank"><img className="team-data"src={linkedin} alt="mohammed" /></a>
</div>



</div>
</div>
  );
}

export default Team;
