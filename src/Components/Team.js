import React from "react";
import mohammed from "../assets/mo.png"
import qa from "../assets/vol.png"
import marcus from "../assets/ma.png"
import quan from "../assets/quang.png"
import linkedin from "../assets/linkedin.png"


function Team() {
  return (
    
    <div>
      <p style={{color:"orange",fontSize:"50px", margin:"10px 0"}}>OUR TEAM</p>
      < div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:'0 5%',padding:"40px 10px"}}>
<div style={{width:"300px"}}>
  <img src={mohammed} alt="mohammed" style={{ width: "15vw", alignContent: "center" }}/>
  <p style={{fontSize:"22px"}}>MOHAMMED SOHEL SHAIKH</p>
  <p style={{fontSize:"25px"}}>CEO</p>
  <a href="https://www.linkedin.com/in/mohammad-sohel-shaikh-225989221/"><img src={linkedin} alt="mohammed" style={{ width: "3vw"}}/></a>
</div>

<div style={{width:"300px"}}>
  <img src={qa} alt="mohammed" style={{ width: "15vw" }}/>
  <p style={{fontSize:"22px"}}>VOLODYMYR DOBROVOLSKYI</p>
  <p style={{fontSize:"25px"}}>QA ENGINEER</p>
  <a href="https://www.linkedin.com/in/vova-dobrovolskiy/?originalSubdomain=ua"><img src={linkedin} alt="mohammed" style={{ width: "3vw"}}/></a>
</div>

<div style={{width:"300px"}}>
  <img src={marcus} alt="mohammed" style={{ width: "15vw" }}/>
  <p style={{fontSize:"22px"}}>MARCUS DSOUZA</p>
  <p style={{fontSize:"25px"}}>SOFTWARE DEVELOPER</p>
  <a href="https://www.linkedin.com/m/in/marcus-dsouza-17b178222/"><img src={linkedin} alt="mohammed" style={{ width: "3vw"}}/></a>
</div>

<div style={{width:"300px"}}>
  <img src={quan} alt="mohammed" style={{ width: "15vw" }}/>
  <p style={{fontSize:"22px"}}>QUANG</p>
  <p style={{fontSize:"25px"}}>MARKETING HEAD</p>
  <a href="https://www.linkedin.com/in/le-quang-tuan-865244220/"><img src={linkedin} alt="mohammed" style={{ width: "3vw"}}/></a>
</div>
</div>
</div>
  );
}

export default Team;
