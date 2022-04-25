import "./index.sass"
import Carousel from "nuka-carousel";
import {ReactComponent as ChickenImage} from '../../assets/images/chicken.svg';
import {ReactComponent as GoatImage} from '../../assets/images/goat.svg';
import {ReactComponent as PigImage} from '../../assets/images/pig.svg';
import {ReactComponent as CowImage} from '../../assets/images/cow.svg';
import {ReactComponent as WhiteArrowRight} from '../../assets/images/slider-arrow-right-white.svg';
import {ReactComponent as WhiteArrowLeft} from '../../assets/images/slider-arrow-left-white.svg';
// import {ReactComponent as BlackArrowRight} from '../../assets/images/slider-arrow-right-black.svg';
// import {ReactComponent as BlackArrowLeft} from '../../assets/images/slider-arrow-left-black.svg';
// import gameplayScreenshot1 from '../../assets/images/game-preview-1.png'
// import gameplayScreenshot2 from '../../assets/images/game-preview-2.png'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Bounce from "react-reveal/Bounce";
import {Parallax} from "react-scroll-parallax";

export default function MainPage() {
    return (
        <div className="main-page">
            <Slide top>
                <video autoPlay loop muted playsInline className="main-page-banner">
                    <source src={require("../../assets/videos/main-banner.mp4").default} type="video/mp4"/>
                </video>
                <video autoPlay loop muted playsInline className="main-page-banner-mobile">
                    <source src={require("../../assets/videos/main-banner-mobile.mp4").default} type="video/mp4"/>
                </video>
            </Slide>
            <Fade bottom>
                <section className="main-description">
                    <h4 className="main-description-title">when nft meets real world utility</h4>
                    <p className="main-description-text">
                        <span className="main-description-text-emphasize">Animal world</span> is a dynamic, tokenized
                        project built on the carbon-neutral WAX blockchain. It offers fun simulated gameplay in which
                        players can collect, own, trade, and exchange farming assets, as well as our token, AWC. We at
                        Animal World are committed towards building and enabling a diverse community of ecologically
                        aware individuals who will contribute towards self-sustainable and ecologically positive
                        farming. The project runs on a real-time basis, with user friendly accessibility.
                    </p>
                </section>
            </Fade>
            <Fade left>
                <section className="main-game">
                    <h2 className="main-title">The game</h2>
                    <div className="main-game-features">
                        <div className="main-game-feature">
                            <ChickenImage className="main-game-feature-image"/>
                            <h5 className="main-game-feature-title">Play to earn</h5>
                            <p className="main-game-feature-text">Animal World is a Play to Earn game, where players are
                                able to achieve real world earning opportunities through engaging in simulated farming
                                to produce resources, which can then be manufactured into finished products.</p>
                        </div>
                        <div className="main-game-feature">
                            <GoatImage className="main-game-feature-image"/>
                            <h5 className="main-game-feature-title">Tradable nft</h5>
                            <p className="main-game-feature-text">All cards are tokenized as NFTs, providing proof of
                                digital ownership by the player. This means they can be traded, auctioned, or exchanged
                                on 3rd party trading platforms.</p>
                        </div>
                        <div className="main-game-feature">
                            <PigImage className="main-game-feature-image"/>
                            <h5 className="main-game-feature-title">Collectibles</h5>
                            <p className="main-game-feature-text">Animal World offers exclusive lands, yield cards, and
                                possession rights. Each is unique and scarce, and is held in the owner's wax wallet.</p>
                        </div>
                        <div className="main-game-feature">
                            <CowImage className="main-game-feature-image"/>
                            <h5 className="main-game-feature-title">Real life farm</h5>
                            <p className="main-game-feature-text">Animal World is a representation of a REAL WORLD FARM.
                                As such, players will not only earn from playing the game, but have opportunities to
                                receive products and earn from the real world.</p>
                        </div>
                        <Parallax speed={-10} className="main-game-feature-plant main-game-feature-plant-1">
                            <img src={require("../../assets/gifs/grass.gif").default} alt="grass"
                                 className="main-game-feature-plant main-game-feature-plant-1"/>
                        </Parallax>
                        <Parallax speed={-10} className="main-game-feature-plant main-game-feature-plant-2">
                            <img src={require("../../assets/gifs/grass.gif").default} alt="grass"
                                 className="main-game-feature-plant main-game-feature-plant-2"/>
                        </Parallax>
                        <Parallax speed={-10} className="main-game-feature-plant main-game-feature-plant-3">
                            <img src={require("../../assets/gifs/grass.gif").default} alt="grass"
                                 className="main-game-feature-plant main-game-feature-plant-3"/>
                        </Parallax>
                    </div>
                </section>
            </Fade>
            <Fade bottom>
                <section className="main-tutorial">
                    <h2 className="main-title">How to play</h2>
                    <Carousel
                        renderCenterLeftControls={({previousSlide}) => (
                            <WhiteArrowLeft className="main-tutorial-slider-arrow" onClick={previousSlide}/>
                        )}
                        renderCenterRightControls={({nextSlide}) => (
                            <WhiteArrowRight className="main-tutorial-slider-arrow" onClick={nextSlide}/>
                        )}
                        easing="easeQuadInOut"
                    >
                        <div className="tutorial-slide tutorial-slide-1">
                            <img src={require("../../assets/images/tutorial-slider-tree.png").default} alt="Tree"
                                 className="tutorial-slide-image"/>
                            <h4 className="tutorial-slide-title">Plant a tree</h4>
                            <div className="tutorial-slide-helper-block"/>
                        </div>
                        <div className="tutorial-slide tutorial-slide-2">
                            <img src={require("../../assets/images/tutorial-slider-apple.png").default} alt="Tree"
                                 className="tutorial-slide-image"/>
                            <h4 className="tutorial-slide-title">Harvest fresh produce</h4>
                            <div className="tutorial-slide-helper-block"/>
                        </div>
                        <div className="tutorial-slide tutorial-slide-3">
                            <img src={require("../../assets/images/tutorial-slider-juice.png").default} alt="Tree"
                                 className="tutorial-slide-image"/>
                            <h4 className="tutorial-slide-title">Processed commodity</h4>
                            <div className="tutorial-slide-helper-block"/>
                        </div>
                        <div className="tutorial-slide tutorial-slide-4">
                            <img src={require("../../assets/images/tutorial-slider-order.png").default} alt="Tree"
                                 className="tutorial-slide-image"/>
                            <h4 className="tutorial-slide-title">Complete daily market order</h4>
                            <div className="tutorial-slide-helper-block"/>
                        </div>
                        <div className="tutorial-slide tutorial-slide-5">
                            <img src={require("../../assets/images/tutorial-slider-awc.png").default} alt="Tree"
                                 className="tutorial-slide-image"/>
                            <h4 className="tutorial-slide-title">Earn reward in the form of awc token</h4>
                            <div className="tutorial-slide-helper-block"/>
                        </div>
                    </Carousel>
                </section>
            </Fade>
            <Fade bottom>
                <section className="main-collect">
                    <h2 className="main-title">Collect them all</h2>
                    <Carousel
                        withoutControls={true}
                        autoplay={true}
                        autoplayInterval={3000}
                        wrapAround={true}
                        pauseOnHover={false}
                        easing="easeQuadInOut"
                    >
                        <div className="main-collect-slide main-collect-slide-1">
                            <div className="main-collect-slide-plate">
                                <p className="main-collect-slide-plate-text">DIVINE Trees</p>
                            </div>
                            <img src={require("../../assets/images/Mango-tree.gif").default} alt="common lemon tree"
                                 className="main-collect-image"/>
                        </div>
                        <div className="main-collect-slide main-collect-slide-1">
                            <div className="main-collect-slide-plate">
                                <p className="main-collect-slide-plate-text">DIVINE Trees</p>
                            </div>
                            <img src={require("../../assets/images/Coconut-tree.gif").default} alt="common lemon tree"
                                 className="main-collect-image"/>
                        </div>
                        <div className="main-collect-slide main-collect-slide-2">
                            <div className="main-collect-slide-plate">
                                <p className="main-collect-slide-plate-text">Crop fields *</p>
                            </div>
                            <img src={require("../../assets/images/crop-field.png").default} alt="rare lemon tree"
                                 className="main-collect-image main-collect-image-small"/>
                        </div>
                        <div className="main-collect-slide main-collect-slide-3">
                            <div className="main-collect-slide-plate">
                                <p className="main-collect-slide-plate-text">Common Machines</p>
                            </div>
                            <img src={require("../../assets/images/comicecream.png").default} alt="epic fig tree"
                                 className="main-collect-image"/>
                        </div>
                        <div className="main-collect-slide main-collect-slide-4">
                            <div className="main-collect-slide-plate">
                                <p className="main-collect-slide-plate-text">Rare Machines</p>
                            </div>
                            <img src={require("../../assets/images/rbbq.gif").default}
                                 alt="legendary coconut tree"
                                 className="main-collect-image"/>
                        </div>
                        <div className="main-collect-slide main-collect-slide-5">
                            <div className="main-collect-slide-plate">
                                <p className="main-collect-slide-plate-text">Legendary Machines</p>
                            </div>
                            <img src={require("../../assets/images/legic.gif").default} alt="mythic lemon tree"
                                 className="main-collect-image"/>
                        </div>
                        <div className="main-collect-slide main-collect-slide-5">
                            <div className="main-collect-slide-plate">
                                <p className="main-collect-slide-plate-text">Land *</p>
                            </div>
                            <img src={require("../../assets/images/lands.png").default} alt="mythic lemon tree"
                                 className="main-collect-image main-collect-image-small"/>
                        </div>
                    </Carousel>
                </section>
            </Fade>
            <Bounce left>
                <section className="main-gameplay">
                    <h2 className="main-title">Gameplay demo</h2>
                    <div className="main-gameplay-content">
                        <div className="main-gameplay-frame">
                            <iframe src="https://www.youtube.com/embed/MvCEEzdbCgs"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen className="main-gameplay-frame-video"/>
                        </div>
                        <img className="main-gameplay-decorations"
                             src={require("../../assets/images/main-gameplay-decorations.png").default}
                             alt="decorations"/>
                    </div>
                </section>
            </Bounce>
            {/*Not needed at the moment*/}
            {/*<Fade right>*/}
            {/*    <section className="main-game-preview">*/}
            {/*        <h2 className="main-title">Game preview</h2>*/}
            {/*        <Carousel*/}
            {/*            renderCenterLeftControls={({previousSlide}) => (*/}
            {/*                <BlackArrowLeft className="main-game-preview-slider-arrow" onClick={previousSlide}/>*/}
            {/*            )}*/}
            {/*            renderCenterRightControls={({nextSlide}) => (*/}
            {/*                <BlackArrowRight className="main-game-preview-slider-arrow" onClick={nextSlide}/>*/}
            {/*            )}*/}
            {/*            easing="easeQuadInOut"*/}
            {/*        >*/}
            {/*            <div className="main-game-preview-slide">*/}
            {/*                <div className="main-game-preview-slide-content">*/}
            {/*                    <img src={require("../../assets/images/game-preview-1.png").default}*/}
            {/*                         alt="game screenshot 2"*/}
            {/*                         className="main-game-preview-slide-image"/>*/}
            {/*                    <div className="main-game-preview-slide-image-phone"*/}
            {/*                         style={{backgroundImage: `url(${gameplayScreenshot1})`}}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="main-game-preview-slide">*/}
            {/*                <div className="main-game-preview-slide-content">*/}
            {/*                    <img src={require("../../assets/images/game-preview-2.png").default}*/}
            {/*                         alt="game screenshot 2"*/}
            {/*                         className="main-game-preview-slide-image"/>*/}
            {/*                    <div className="main-game-preview-slide-image-phone"*/}
            {/*                         style={{backgroundImage: `url(${gameplayScreenshot2})`}}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Carousel>*/}
            {/*    </section>*/}
            {/*</Fade>*/}
        </div>
    )
}
