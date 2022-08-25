import './index.sass'
import {ReactComponent as FarmerImage} from "../../assets/images/episodes-farmer.svg";
import {ReactComponent as Episode1Image} from "../../assets/images/episode-1.svg";
import {ReactComponent as Episode2Image} from "../../assets/images/episode-2.svg";
import {ReactComponent as Episode3Image} from "../../assets/images/episode-3.svg";
import {ReactComponent as Episode4Image} from "../../assets/images/episode-4.svg";
import {ReactComponent as Episode5Image} from "../../assets/images/episode-5.svg";
import {ReactComponent as DashedLine} from "../../assets/images/episodes-dashed-line.svg";
import {ReactComponent as DashedLineMobile} from "../../assets/images/episodes-dashed-line-mobile.svg";
import {Fade} from 'react-awesome-reveal';
import {Parallax} from "react-scroll-parallax";

export default function EpisodesPage() {

    return (
        <div className="episodes-page">
            <Fade bottom>
                <section className="episodes-introduction">
                    <div className="episodes-introduction-text-container">
                        <p className="episodes-introduction-text">
                            Episodes refer to the sequence of events as to how the real-life utility counterpart of animal world is projected to be built over the course of time.
                        </p>
                    </div>
                    <video autoPlay loop muted playsInline className="episodes-introduction-image">
                        <source src={require("../../assets/videos/farmer.webm").default} type="video/webm"/>
                    </video>
                </section>
            </Fade>
            <section className="episodes">
                <Parallax speed={10} className="episodes-dashed-line">
                    <DashedLine className="episodes-dashed-line"/>
                </Parallax>
                <DashedLineMobile className="episodes-dashed-line-mobile"/>
                <Fade bottom>
                    <div className="episode">
                        <div className="episode-text-wrapper">
                            <h1 className="episode-text-title episode-text-title-blue">Episode 1</h1>
                            <p className="episode-text">
                                During the initial stage, ANIMAL WORLD will witness laying down of a robust foundational infrastructure for a real life farm. The real life farm will start being built after the game economy is set up and active.
                            </p>
                        </div>
                        <div className="episode-dashed-line"/>
                        <Episode1Image className="episode-image"/>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="episode">
                        <Episode2Image className="episode-image"/>
                        <div className="episode-text-wrapper">
                            <h1 className="episode-text-title">Episode 2</h1>
                            <p className="episode-text">
                                As the gameplay moves forward, there will be multiple developments on the farm and the finished products from it will be used to form an economy outside the game. Various crops like wheat, rice and spices will be grown on the crop fields in the farm and used to produce different kinds of finished products as well as store and supply the raw materials.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="episode">
                        <div className="episode-text-wrapper">
                            <h1 className="episode-text-title">Episode 3</h1>
                            <p className="episode-text">
                                This stage will open up a number of construction projects including a Forest House and a Central Garden. Animals like horses, ducks, goats, hen buffaloes, and cows along with many others will be reared on the farm. They will be sources of rich food products and also form a sustainable ecosystem. The different types of food, textile and other products will be processed at this point and supplied to different food chains.
                            </p>
                        </div>
                        <Episode3Image className="episode-image"/>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="episode">
                        <Episode4Image className="episode-image"/>
                        <div className="episode-text-wrapper">
                            <h1 className="episode-text-title">Episode 4</h1>
                            <p className="episode-text">
                                At this point, we bring the advanced machinery into play. Utilizing the potential of robotics when coupled with AI enabled programming, we will host smart irrigation techniques like Drip Irrigation, pesticide sprays using drones, and others. To augment the self-reliability of solar panels will be installed for electricity production and distribution within the project area. The whole setup will be monitored by new-age security cameras.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="episode">
                        <div className="episode-text-wrapper">
                            <h1 className="episode-text-title">Episode 5</h1>
                            <p className="episode-text">
                                On reaching the final step of building the animal world , we are now looking at setting up accommodations of various kind such as hotels,
                                restaurants, cave houses etc. With this the real life brand of animal world will be initialised and used in various other industries as well. AWC will always play an important part in the real life utility in a decentralized manner as we progress on development in this sector.
                            </p>
                        </div>
                        <Episode5Image className="episode-image"/>
                    </div>
                </Fade>
            </section>
        </div>
    )
}