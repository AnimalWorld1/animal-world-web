import React from 'react'
import BlendingImg1 from '../assets/blendingImg1.webp'
import BlendingImg2 from '../assets/blendingImg2.webp'
import BlendingImg3 from '../assets/blendingImg3.webp'
import BlendingImg4 from '../assets/blendingImg4.webp'

function Blending1() {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <img src={BlendingImg1} alt="blendingImg1" style={{width:'55vw'}} />
           <img src={BlendingImg2} alt="blendingImg2" style={{width:'55vw'}} />
           <img src={BlendingImg3} alt="blendingImg3" style={{width:'55vw'}} />
           <img src={BlendingImg4} alt="blendingImg4" style={{width:'55vw'}} /> 
        </div>
    )
}

export default Blending1
