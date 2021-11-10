import React from "react";
import mohammed from "../assets/mohammed.png"
import qa from "../assets/qa.png"
import marcus from "../assets/marcus.png"
import quan from "../assets/quan.png"
import linkedin from "../assets/linkedin.png"


function Team() {
  return (
    < div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:'0 10%',padding:"100px 10px"}}
    >

<div>
  <img src={mohammed} alt="mohammed" style={{ width: "15vw" }}/>


  <a href="default.asp">
<img src={linkedin} alt="mohammed" style={{ width: "3vw", color:"black",position:"relative",top:"8vw",right:"8vw"  }}/>
</a>
<div style={{fontSize:"22px"}}>MOHAMMED SOHEL SHAIKH </div>

<div style={{fontSize:"25px"}}> CEO</div>
</div>


<div>

<img src={quan} alt="mohammed" style={{ width: "15vw" }}/>

<a href="default.asp">
<img src={linkedin} alt="mohammed" style={{ width: "3vw", color:"black",position:"relative",top:"9vw",right:"8vw"  }}/>
</a>
<div style={{fontSize:"22px"}}>QUANG </div>

<div style={{fontSize:"25px"}}> MARKETING HEAD
</div>
</div>


<div>
<img src={qa} alt="mohammed" style={{ width: "15vw" }}/>

<a href="default.asp">
<img src={linkedin} alt="mohammed" style={{ width: "3vw", color:"black",position:"relative",top:"8vw",right:"8vw"  }}/>
</a>
<div style={{fontSize:"22px"}}>VOLODYMYR DOBROVOLSKYI </div>

<div style={{fontSize:"25px"}}> QA ENGINEER
</div>
</div>

<div>
<img src={marcus} alt="mohammed" style={{ width: "15vw" }}/>

<a href="default.asp">
<img src={linkedin} alt="mohammed" style={{ width: "3vw", color:"black",position:"relative",top:"8vw",right:"8vw"  }}/>
</a>
<div style={{fontSize:"22px"}}>
MARCUS DSOUZA </div>

<div style={{fontSize:"25px"}}>SOFTWARE DEVELOPER

</div>
</div>

</div>
  );
}

export default Team;
