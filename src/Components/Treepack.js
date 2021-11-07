import React from 'react'
import treepack from '../assets/treepack.png'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.webp'
import photo3 from '../assets/photo3.webp'

function Treepack() {
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',width:"100%"}}>
                <img src={treepack} style={{width:'11em',height:'4em',position:"relative",top:"5%"}} alt="tree"/></div>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:'0 1%'}}>
            <img src={photo1} alt='photo1' style={{width:'320px',margin:"1em"}}/>
                <img src={photo2} alt='photo2' style={{width:'320px',margin:"1em"}}/>
                <img src={photo3} alt='photo3' style={{width:'320px',margin:"1em"}}/>
                
            </div>
        </div>
    )
}

export default Treepack;
