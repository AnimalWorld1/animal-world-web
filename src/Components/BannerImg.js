import React from 'react'
import animalWorld1 from "../assets/animalworld1.webp"
import firstImg from "../assets/firstImg.webp"
function BannerImg() {
    return (
        <div>
            <div className="head-text">
              <div className="head-image" style={{position:"relative"}}>
                <img src={firstImg} alt="Freedom Blog"  style={{width:"100vw"}} />
                <img src={animalWorld1} className="animate__animated animate__flip" alt="Freedom Blog" style={{position:"absolute",left:"25%", top:"10%",width:"50%"}} />
              </div>
            </div>
        </div>
    )
}

export default BannerImg
