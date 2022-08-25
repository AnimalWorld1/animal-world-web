import './index.sass'
import {ReactComponent as RoadmapGreenhouse} from "../../assets/images/roadmap-greenhouse.svg";
import {ReactComponent as RoadmapMobileImage} from "../../assets/images/roadmap-mobile.svg";
import {ReactComponent as RoadmapMobileHaystack} from "../../assets/images/roadmap-haystack.svg";
import {ReactComponent as RoadmapMobileCart} from "../../assets/images/roadmap-cart.svg";
import {ReactComponent as RoadmapMobilePlant} from "../../assets/images/roadmap-plant.svg";
import Fade from "react-awesome-reveal/Fade";

export default function RoadmapPage() {

    return (
        <>
            <div className="roadmap-page">
                <Fade bottom>
                    <div className="roadmap-video-wrapper">
                        <video autoPlay loop muted playsInline className="roadmap-image">
                            <source src={require("../../assets/videos/roadmap.mp4").default} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="roadmap-mobile-background">
                        <RoadmapMobileImage className="roadmap-mobile-image"/>
                        <div className="roadmap-mobile-background-elements">
                            <RoadmapMobileHaystack className="roadmap-mobile-background-item"/>
                            <img src={require("../../assets/gifs/fig-tree.gif").default} alt="fig tree gif" className="roadmap-mobile-background-item"/>
                            <RoadmapMobileCart className="roadmap-mobile-background-item"/>
                            <RoadmapMobilePlant className="roadmap-mobile-background-item"/>
                            <img src={require("../../assets/gifs/roadmap-mango-tree.gif").default} alt="mango tree" className="roadmap-mobile-background-item"/>
                            <img src={require("../../assets/gifs/windmill.gif").default} alt="windmill gif" className="roadmap-mobile-background-item"/>
                        </div>
                    </div>
                    <div className="roadmap-content">
                        <h1 className="page-title">Roadmap</h1>
                        <div className="roadmap-content-blocks">
                            <div className="roadmap-block">
                                <h4 className="roadmap-block-title">Q4/2021</h4>
                                <div className="roadmap-block-content">
                                    <span className="roadmap-block-content-item">✅ &nbsp;Tree sale</span>
                                    <span className="roadmap-block-content-item">✅ &nbsp;Trees staking for <br/> AWC </span>
                                    <span className="roadmap-block-content-item">✅ &nbsp;Land sale phase 1</span>
                                </div>
                            </div>
                            <div className="roadmap-block">
                                <h4 className="roadmap-block-title">Q1/2022</h4>
                                <div className="roadmap-block-content-wrapper">
                                    <div className="roadmap-block-content">
                                        <span className="roadmap-block-content-item">✅ &nbsp;New whitepaper <br/> release</span>
                                        <span className="roadmap-block-content-item">✅ &nbsp;New website</span>
                                        <span className="roadmap-block-content-item">✅ &nbsp;Game Updates<br/> and sneak peeks</span>
                                    </div>
                                    <div className="roadmap-block-content">
                                        <span className="roadmap-block-content-item">✅ &nbsp;Machines and Crop<br/> fields drop in AWC (February 16th and 26th)</span>
                                        <span className="roadmap-block-content-item">✅ &nbsp;Alpha game release and testing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-block">
                                <h4 className="roadmap-block-title">Q2-Q4/2022</h4>
                                <div className="roadmap-block-content-wrapper">
                                    <div className="roadmap-block-content">
                                        <span className="roadmap-block-content-item">✅ &nbsp;Animal, Shelters and Machine Pack V3 sale</span>
                                        <span className="roadmap-block-content-item">✅ &nbsp;Upgrades to AWC distribution system</span>
                                        <span className="roadmap-block-content-item">✅ &nbsp;Collaboration NFTs integrated with partner projects</span>
                                        <span className="roadmap-block-content-item">🔳 &nbsp;New Machines and Recipes</span>
                                    </div>
                                    <div className="roadmap-block-content">
                                        <span className="roadmap-block-content-item">🔳 &nbsp;Land upgrade mechanics</span>
                                        <span className="roadmap-block-content-item">🔳 &nbsp;Next game modes- Free To Play, Land Expansion +</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <section className="roadmap-future">
                        <h2 className="page-title">Future Plans for Animal World</h2>
                        <p className="roadmap-text">We have future plans to create and explore new features and game mechanics.
                            The next phase will be involving multiplayer mechanics to allow users to interact
                            with each other and play interactive games
                        </p>
                        <div className="roadmap-future-content-wrapper">
                            <div className="roadmap-future-content-image-container">
                                <RoadmapGreenhouse className="roadmap-future-content-image-1"/>
                            </div>
                            <div className="roadmap-future-content">
                                <span className="roadmap-future-content-item">🔳 New animals (Wolves, Lions, Eagle etc)</span>
                                <span className="roadmap-future-content-item">🔳 PVP battle mode</span>
                                <span className="roadmap-future-content-item">🔳 Metaverse Extensions </span>
                                <img src={require("../../assets/gifs/vr.gif").default} alt="vr gif" className="roadmap-future-content-item roadmap-future-content-item-image"/>
                            </div>
                            <div className="roadmap-future-content-image-container">
                                <img alt="tractor gif" src={require("../../assets/gifs/tractor.gif").default} className="roadmap-future-content-image-2"/>
                            </div>
                        </div>
                    </section>
                </Fade>
                <Fade right>
                    <section className="roadmap-tokenomics">
                        <h2 className="page-title">Tokenomics</h2>
                        <h4 className="page-title">TOTAL SUPPLY- 10,000,000,000</h4>
                        <div className="roadmap-tokenomics-wrapper">
                            <div className="roadmap-tokenomics-content">
                                <div className="roadmap-tokenomics-item">
                                    <h6 className="roadmap-tokenomics-item-title">PLAY TO EARN 30%</h6>
                                    <hr className="roadmap-tokenomics-item-line"/>
                                    <span className="roadmap-tokenomics-item-value">3,000,000,000</span>
                                </div>
                                <div className="roadmap-tokenomics-item">
                                    <h6 className="roadmap-tokenomics-item-title">RESEARCH & DEVELOPMENT 25%</h6>
                                    <hr className="roadmap-tokenomics-item-line"/>
                                    <span className="roadmap-tokenomics-item-value">2,500,000,000</span>
                                </div>
                                <div className="roadmap-tokenomics-item">
                                    <h6 className="roadmap-tokenomics-item-title">TEAM 15%</h6>
                                    <hr className="roadmap-tokenomics-item-line"/>
                                    <span className="roadmap-tokenomics-item-value">1,500,000,000</span>
                                </div>
                                <div className="roadmap-tokenomics-item">
                                    <h6 className="roadmap-tokenomics-item-title">MARKETING / PROMOTION 18%</h6>
                                    <hr className="roadmap-tokenomics-item-line"/>
                                    <span className="roadmap-tokenomics-item-value">1,800,000,000</span>
                                </div>
                                <div className="roadmap-tokenomics-item">
                                    <h6 className="roadmap-tokenomics-item-title">legal 5%</h6>
                                    <hr className="roadmap-tokenomics-item-line"/>
                                    <span className="roadmap-tokenomics-item-value">500,000,000</span>
                                </div>
                                <div className="roadmap-tokenomics-item">
                                    <h6 className="roadmap-tokenomics-item-title">advisor 5%</h6>
                                    <hr className="roadmap-tokenomics-item-line"/>
                                    <span className="roadmap-tokenomics-item-value">500,000,000</span>
                                </div>
                                <div className="roadmap-tokenomics-item">
                                    <h6 className="roadmap-tokenomics-item-title">airdrop/lp rewards 2%</h6>
                                    <hr className="roadmap-tokenomics-item-line"/>
                                    <span className="roadmap-tokenomics-item-value">200,000,000</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fade>
            </div>
        </>
    )
}

