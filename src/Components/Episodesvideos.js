import React from 'react'
import episode1 from '../assets/episode1.gif'
import episode2 from '../assets/episode2.gif'
import episode3 from '../assets/episode3.gif'
import episode4 from '../assets/episode4.gif'
import episode5 from '../assets/episode5.gif'
import episodes_3 from "../assets/episodes-img-3.webp";
import episodes_5 from "../assets/episodes-img-5.webp";

import episodes_7 from "../assets/episodes-img-7.webp";

import episodes_9 from "../assets/episodes-img-9.webp";

import episodes_11 from "../assets/episodes-img-11.webp";
import AboutCard from "./AboutCard";
function Episodesvideos() {
    return (
        <>
            <div style={{marginTop:"2em"}}>
            <AboutCard titleImg={episodes_3} />
           <img className="tknboard" src={episode1} alt="episode1"  />
            </div>
            <div style={{marginTop:"2em"}}>
            <AboutCard titleImg={episodes_5} />
           <img iclassName="tknboard" src={episode2} alt="episode2"  />
            </div>
            <div style={{marginTop:"2em"}}>
            <AboutCard titleImg={episodes_7} />
           <img className="tknboard" src={episode3} alt="episode3"  />
            </div>
            <div style={{marginTop:"2em"}}>
            <AboutCard titleImg={episodes_9}/>
           <img className="tknboard" src={episode4} alt="episode4"  />
            </div>
            <div style={{marginTop:"2em"}}>
            <AboutCard titleImg={episodes_11} />
           <img className="tknboard" src={episode5} alt="episode5"  />
            </div>
        </>
    )
}

export default Episodesvideos