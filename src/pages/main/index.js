import "./index.sass";
import Carousel from "nuka-carousel";
import { ReactComponent as Hen } from "../../assets/images/hen.svg";
import { ReactComponent as ChickenImage } from "../../assets/images/chicken.svg";
import { ReactComponent as GoatImage } from "../../assets/images/goat.svg";
import { ReactComponent as PigImage } from "../../assets/images/pig.svg";
import { ReactComponent as CowImage } from "../../assets/images/cow.svg";
import { ReactComponent as WhiteArrowRight } from "../../assets/images/slider-arrow-right-white.svg";
import { ReactComponent as WhiteArrowLeft } from "../../assets/images/slider-arrow-left-white.svg";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { isMobile } from "react-device-detect";
//Not being used atm
// import {ReactComponent as BlackArrowRight} from '../../assets/images/slider-arrow-right-black.svg';
// import {ReactComponent as BlackArrowLeft} from '../../assets/images/slider-arrow-left-black.svg';
// import gameplayScreenshot1 from '../../assets/images/game-preview-1.png'
// import gameplayScreenshot2 from '../../assets/images/game-preview-2.png'
// import {Parallax} from "react-scroll-parallax";

export default function MainPage() {
  return (
    <div className="main-page">
      <Slide>
        <video autoPlay loop muted playsInline className="main-page-banner">
          <source
            src={require("../../assets/videos/main-banner.mp4")}
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="main-page-banner-mobile"
        >
          <source
            src={require("../../assets/videos/main-banner-mobile.mp4")}
            type="video/mp4"
          />
        </video>
      </Slide>
      <Fade bottom>
        <section className="main-description">
          <h4 className="main-description-title">
            NFT Farming Simulation Game
          </h4>
          <p className="main-description-text">
            <span className="main-description-text-emphasize">
              Animal world
            </span>{" "}
            is a 3D web simulation game using NFTs on the WAX Blockchain.
            Strategize to build and grow your farm. Use trees ,cropfields
            animals and machines to make delicious recipes! Make your way to the
            top, collecting AWC, XP and NFT rewards by filling daily market
            orders. The ever-expanding Animal World is full of surprises for the
            hard working farmers as they grow their farms and get ready to
            embark on new adventures.
          </p>
        </section>
        <div className="main-description-dimensions" />
      </Fade>
      <div className="background">
        <Fade left>
          <section className="main-game">
            <div className="title-wrapper">
              <img
                src={require("../../assets/images/wooden-sign-4.png")}
                alt=""
                className="title-sign"
              />
              <h2 className="title">The game</h2>
            </div>
            <div className="main-game-features">
              <div className="main-game-feature">
                <ChickenImage className="main-game-feature-image" />
                <h5 className="main-game-feature-title">Play to earn</h5>
                <p className="main-game-feature-text">
                  Animal World is a Play to Earn game, where players are able to
                  achieve real world earning opportunities through engaging in
                  simulated farming to produce resources, which can then be
                  manufactured into finished products.
                </p>
              </div>
              <div className="main-game-feature">
                <GoatImage className="main-game-feature-image" />
                <h5 className="main-game-feature-title">Tradable nft</h5>
                <p className="main-game-feature-text">
                  All cards are tokenized as NFTs, providing proof of digital
                  ownership by the player. This means they can be traded,
                  auctioned, or exchanged on 3rd party trading platforms.
                </p>
              </div>
              <div className="main-game-feature">
                <PigImage className="main-game-feature-image" />
                <h5 className="main-game-feature-title">Collectibles</h5>
                <p className="main-game-feature-text">
                  Animal World offers exclusive lands, yield cards, and
                  possession rights. Each is unique and scarce, and is held in
                  the owner's wax wallet.
                </p>
              </div>
              <div className="main-game-feature">
                <CowImage className="main-game-feature-image" />
                <h5 className="main-game-feature-title">Expand your farm</h5>
                <p className="main-game-feature-text">
                  Animal World is a simulation of a real farming envrionment.
                  Use your own strategies to evolve and grow your farming assets
                </p>
              </div>
              {/*<Parallax speed={-10} className="main-game-feature-plant main-game-feature-plant-1">*/}
              {/*    <img src={require("../../assets/gifs/grass.gif")} alt="grass"*/}
              {/*         className="main-game-feature-plant main-game-feature-plant-1"/>*/}
              {/*</Parallax>*/}
              {/*<Parallax speed={-10} className="main-game-feature-plant main-game-feature-plant-2">*/}
              {/*    <img src={require("../../assets/gifs/grass.gif")} alt="grass"*/}
              {/*         className="main-game-feature-plant main-game-feature-plant-2"/>*/}
              {/*</Parallax>*/}
              {/*<Parallax speed={-10} className="main-game-feature-plant main-game-feature-plant-3">*/}
              {/*    <img src={require("../../assets/gifs/grass.gif")} alt="grass"*/}
              {/*         className="main-game-feature-plant main-game-feature-plant-3"/>*/}
              {/*</Parallax>*/}
            </div>
          </section>
        </Fade>
        <section className="main-tutorial">
          <div className="title-wrapper">
            <img
              src={require("../../assets/images/wooden-sign-1.png")}
              alt=""
              className="title-sign"
            />
            <h2 className="title title-long">
              How
              <br />
              to play
            </h2>
          </div>
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <WhiteArrowLeft
                className="main-tutorial-slider-arrow"
                onClick={previousSlide}
              />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <WhiteArrowRight
                className="main-tutorial-slider-arrow"
                onClick={nextSlide}
              />
            )}
          >
            <div className="tutorial-slide tutorial-slide-1">
              <img
                src={require("../../assets/images/tutorial-slider-tree.png")}
                alt="Tree"
                className="tutorial-slide-image"
              />
              <h4 className="tutorial-slide-title">
                Plant a<br /> tree
                <br />
                Crop Field
                <br />
                Animal
              </h4>
              <div className="tutorial-slide-helper-block" />
            </div>
            <div className="tutorial-slide tutorial-slide-2">
              <img
                src={require("../../assets/images/tutorial-slider-apple.png")}
                alt="Tree"
                className="tutorial-slide-image"
              />
              <h4 className="tutorial-slide-title">Harvest fresh produce</h4>
              <div className="tutorial-slide-helper-block" />
            </div>
            <div className="tutorial-slide tutorial-slide-3">
              <img
                src={require("../../assets/images/tutorial-slider-juice.png")}
                alt="Tree"
                className="tutorial-slide-image"
              />
              <h4 className="tutorial-slide-title">
                Make delicious recipes using machines
              </h4>
              <div className="tutorial-slide-helper-block" />
            </div>
            <div className="tutorial-slide tutorial-slide-4">
              <img
                src={require("../../assets/images/tutorial-slider-order.png")}
                alt="Tree"
                className="tutorial-slide-image"
              />
              <h4 className="tutorial-slide-title">
                Complete daily market order
              </h4>
              <div className="tutorial-slide-helper-block" />
            </div>
            <div className="tutorial-slide tutorial-slide-5">
              <img
                src={require("../../assets/images/tutorial-slider-awc.png")}
                alt="Tree"
                className="tutorial-slide-image"
              />
              <h4 className="tutorial-slide-title">
                Earn reward in crypto and NFTs!
              </h4>
              <div className="tutorial-slide-helper-block" />
            </div>
          </Carousel>
        </section>
        <div className="tutorial-dimensions" />
        <Fade bottom>
          <section className="main-collect">
            <div className="title-wrapper">
              <img
                src={require("../../assets/images/wooden-sign-1.png")}
                alt=""
                className="title-sign"
              />
              <h2 className="title title-long">
                Collect
                <br />
                them all
              </h2>
            </div>
            <Carousel
              withoutControls={true}
              autoplay={true}
              autoplayInterval={3000}
              wrapAround={true}
              pauseOnHover={false}
            >
              <div className="main-collect-slide">
                <div className="main-collect-slide-plate">
                  <p className="main-collect-slide-plate-text">DIVINE Trees</p>
                </div>
                <img
                  src={`https://ipfs.io/ipfs/QmeU8xiGtGHSiA88d9Ssmd8Gg5uUyJKy23VE8vuAq5Skqp`}
                  className="main-collect-image"
                />
              </div>
              <div className="main-collect-slide">
                <div className="main-collect-slide-plate">
                  <p className="main-collect-slide-plate-text">DIVINE Trees</p>
                </div>
                <img
                  src={`https://ipfs.io/ipfs/QmP9BSGWsiJa2gjapJnu8h2KRaVnjQCZeQDJb5rUuphieM`}
                  alt="common lemon tree"
                  className="main-collect-image"
                />
              </div>
              <div className="main-collect-slide">
                <div className="main-collect-slide-plate">
                  <p className="main-collect-slide-plate-text">Crop fields</p>
                </div>
                <img
                  src={require("../../assets/images/crop-field.png")}
                  alt="rare lemon tree"
                  className="main-collect-image main-collect-image-small"
                />
              </div>
              <div className="main-collect-slide">
                <div className="main-collect-slide-plate">
                  <p className="main-collect-slide-plate-text">
                    Common Machines
                  </p>
                </div>
                <img
                  src={require("../../assets/images/comicecream.png")}
                  alt="epic fig tree"
                  className="main-collect-image"
                />
              </div>
              <div className="main-collect-slide">
                <div className="main-collect-slide-plate">
                  <p className="main-collect-slide-plate-text">Rare Machines</p>
                </div>
                <img
                  src={`https://ipfs.io/ipfs/QmR4wkuppqhc73NodhzR5m7JJh2u4GCMi5D2shoa5xfwSF`}
                  alt="legendary coconut tree"
                  className="main-collect-image"
                />
              </div>
              <div className="main-collect-slide">
                <div className="main-collect-slide-plate">
                  <p className="main-collect-slide-plate-text">
                    Legendary Machines
                  </p>
                </div>
                <img
                  src={`https://ipfs.io/ipfs/QmU4bX7aGxxNhsqF71oKvto9FMfKrd44Bc2sXWvoy1Zay6`}
                  className="main-collect-image"
                />
              </div>
              <div className="main-collect-slide">
                <div className="main-collect-slide-plate">
                  <p className="main-collect-slide-plate-text">Land</p>
                </div>
                <img
                  src={require("../../assets/images/lands.png")}
                  alt="mythic lemon tree"
                  className="main-collect-image main-collect-image-small"
                />
              </div>
            </Carousel>
          </section>
          <Bounce left></Bounce>
        </Fade>
      </div>
    </div>
  );
}
