import React from "react";
import mohammed from "../assets/mo.png"
import qa from "../assets/vol.png"
import marcus from "../assets/ma.png"
import quan from "../assets/quang.png"
import linkedin from "../assets/linkedin.png"
import team_img from "../assets/TEAM.png"


function Team() {
  return (
    
      <div>
      <img src={team_img} alt="roadmap" style={{ width: "45vw" }} />

      < div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',padding:'20px 0px'}}>

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
  <a href="https://www.linkedin.com/in/vova-dobrovolskiy/?originalSubdomain=ua" target="_blank"><img className="team-data"src={linkedin} alt="mohammed" /></a>
</div>

<div style={{width:"300px"}}>
  <img className="team-img" src={marcus} alt="mohammed" />
  <p className="team-txt">MARCUS DSOUZA</p>
  <p className="team-txt1">SOFTWARE DEVELOPER</p>
  <a href="https://www.linkedin.com/m/in/marcus-dsouza-17b178222/" target="_blank"><img className="team-data"src={linkedin} alt="mohammed" /></a>
</div>

<div style={{width:"300px"}}>
  <img className="team-img" src={quan} alt="mohammed" />
  <p className="team-txt">QUANG</p>
  <p className="team-txt1">MARKETING HEAD</p>
  <a href="https://www.linkedin.com/in/le-quang-tuan-865244220/" target="_blank"><img className="team-data" src={linkedin} alt="mohammed" /></a>
</div>
</div>
</div>
  );
}

export default Team;
