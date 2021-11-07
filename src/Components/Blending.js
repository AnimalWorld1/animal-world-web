import React from 'react'
import Fire from "../assets/fire.webp"
import BlendingMin from "../assets/BLENDNG-min.png"

function Blending() {
    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img src={Fire} alt="fire" style={{width:'5vw',height:'5vw'}}/>
            <img src={BlendingMin} alt="BlendingMin"  style={{width:'35vw',padding:'0 5%'}}/>
            <img src={Fire} alt="fire" style={{width:'5vw',height:'5vw'}} />
        </div>
    )
}

export default Blending
