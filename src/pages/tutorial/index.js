import "./index.sass"
import Carousel from "nuka-carousel";
import {ReactComponent as Hen} from '../../assets/images/hen.svg';
import {ReactComponent as ChickenImage} from '../../assets/images/chicken.svg';
import {ReactComponent as GoatImage} from '../../assets/images/goat.svg';
import {ReactComponent as PigImage} from '../../assets/images/pig.svg';
import {ReactComponent as CowImage} from '../../assets/images/cow.svg';
import {ReactComponent as WhiteArrowRight} from '../../assets/images/slider-arrow-right-white.svg';
import {ReactComponent as WhiteArrowLeft} from '../../assets/images/slider-arrow-left-white.svg';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Bounce from "react-reveal/Bounce";
import {isMobile} from "react-device-detect";
//Not being used atm
// import {ReactComponent as BlackArrowRight} from '../../assets/images/slider-arrow-right-black.svg';
// import {ReactComponent as BlackArrowLeft} from '../../assets/images/slider-arrow-left-black.svg';
// import gameplayScreenshot1 from '../../assets/images/game-preview-1.png'
// import gameplayScreenshot2 from '../../assets/images/game-preview-2.png'
// import {Parallax} from "react-scroll-parallax";

export default function TutorialPage() {
    return (
        <div className="main-page">
            <div className="background">
                <section className="main-tutorial">
                    <div className="title-wrapper">
                        <img src={require("../../assets/images/wooden-sign-1.png").default} alt=""
                             className="title-sign"/>
                        <h2 className="title title-long">How<br/>to play</h2>
                    </div>
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
                            <h4 className="tutorial-slide-title">Plant a<br/> tree/<br/>Crop Field/<br/>Animal</h4>
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
                            <h4 className="tutorial-slide-title">Make delicious recipes using machines</h4>
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
                            <h4 className="tutorial-slide-title">Earn reward in AWC and NFTs!</h4>
                            <div className="tutorial-slide-helper-block"/>
                        </div>
                    </Carousel>
                </section>
            </div>
        </div>
    )
}
