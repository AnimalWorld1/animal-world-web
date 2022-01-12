import Token from "./Token";
import Roadmap from "./Roadmap";
import Treepack from "./Treepack";
import Possesion from "./Possesion";
import Blending from "./Blending";
import Blending1 from "./Blending1";

import data from "./data";
import Banner from "./Banner";
import game from "../assets/thegame.png";
import BannerImg from "./BannerImg";
import nft_meet_real from "../assets/real_img.png";
import { Carousel } from "react-responsive-carousel";
import PlayCard from "./PlayCard";
import tree from "../assets/tree.png";
import mango from "../assets/mango.png";
import processed from '../assets/processed.png';
import complete from '../assets/complete.png';
import final from '../assets/final.png';
import howtoplay_img from "../assets/howtoplay.png";
import mythic from "../assets/sheepcard.PNG"
import mangotree from "../assets/goatcard.PNG"
import lemon from "../assets/cowcard.PNG"
import fig from "../assets/pigcard.PNG";
import coconut from "../assets/hencard.PNG"
import collectall from "../assets/collectall.webp";
import Isometricland08 from "../assets/Isometricland08.png"
import Overlay from "../assets/Overlay.gif"

import AvailableOn from "../assets/AvailableOn.png"
import AppleAppStore from "../assets/AppleAppStore.png"
import Google from "../assets/Google.png"
			import Farming from "../assets/Farming.png"
			import Farmingatitsfinest from "../assets/Farmingatitsfinest.png"
			import It39stimeforyoutoget from "../assets/It39stimeforyoutoget.png"
			import Rectangle2 from "../assets/Rectangle2.png"
			import Layer1 from "../assets/Layer1.png"
			import House from "../assets/House.png"
			import Itistimeforanewstart from "../assets/Itistimeforanewstart.png"
			import HowdyskilledBuddiesN from "../assets/HowdyskilledBuddiesN.png"
			import tech from "../assets/tech.png"
			import Createyourdreamfarm from "../assets/Createyourdreamfarm.png"
			import Happyanimalsarethere from "../assets/Happyanimalsarethere.png"
			import Competewithyourpals from "../assets/Competewithyourpals.png"
			import Rectangle3 from "../assets/Rectangle3.png"
			import Anewworldtodiscover from "../assets/Anewworldtodiscover.png"
			import Theworldofgamenameal from "../assets/Theworldofgamenameal.png"
			import Tradeyourgoodsandcro from "../assets/Tradeyourgoodsandcro.png"
			import Crope from "../assets/Crope.png"
			import Animals from "../assets/Animals.gif"
			import Animalscopy from "../assets/Animalscopy.gif"
			import Animalscopy2 from "../assets/Animalscopy2.gif"
			import Animalscopy3 from "../assets/Animalscopy3.gif"
			import Lastpagecopy from "../assets/Lastpagecopy.png"
			import FollowUsOnSocialMedi from "../assets/FollowUsOnSocialMedi.png"
			import Layer11copy2 from "../assets/Layer11copy2.png"
			import Layer8copy2 from "../assets/Layer8copy2.png"
			import Layer9copy2 from "../assets/Layer9copy2.png"
			import Layer10copy2 from "../assets/Layer10copy2.png"
			import GameLinkTermsofServi from "../assets/GameLinkTermsofServi.png"
			import Googlecopy from "../assets/Googlecopy.png"
			import AppleAppStorecopy from "../assets/AppleAppStorecopy.png"
import Team from "./Team";


const howToPlayData = [
  ["Plant a Tree", "linear-gradient(315deg, #000000 0%, #958e69 74%)","white", tree],
  ["Harvest Fresh Produce", "linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)","white", mango],
  ["Processed Commodity", "linear-gradient(315deg, #ffa69e 0%, #5d4954 74%)","white", processed],
  ["Complete Daily Market Order", "linear-gradient(315deg, #7a7adb 0%, #170e13 74%)","white", complete],
  ["Earn Reward In The Form Of AWC Token", "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))","black", final],
];
const collectAllData = [
  ["COMMON", "linear-gradient(to right, #7498fd, #cac3fe)", mangotree],
  ["RARE", "linear-gradient(to right, #7498fd, #cac3fe)", lemon],
  ["EPIC", "linear-gradient(to right, #7498fd, #cac3fe)", fig],
  ["LEGENDARY", "linear-gradient(to right, #7498fd, #cac3fe)", coconut],
  ["MYTHIC", "linear-gradient(to right, #7498fd, #cac3fe)", mythic],
];

const Home = ({ login }) => {
  return (
    <>
	
      <div id="background">
			<div id="Overlay">

  <img src={Overlay} /></div>
<div class="video-container">
</div>
			<div id="Farmingatitsfinest"><img src={Farmingatitsfinest} /></div>
			<div id="It39stimeforyoutoget"><img src={It39stimeforyoutoget} /></div>
			<div id="House"><img src={House} /></div>
			<div id="Itistimeforanewstart"><img src={Itistimeforanewstart} /></div>
			<div id="HowdyskilledBuddiesN"><img src={HowdyskilledBuddiesN} /></div>
			<div id="Createyourdreamfarm"><img src={Createyourdreamfarm} /></div>
			<div id="Happyanimalsarethere"><img src={Happyanimalsarethere} /></div>
			<div id="Anewworldtodiscover"><img src={Anewworldtodiscover} /></div>
			<div id="Theworldofgamenameal"><img src={Theworldofgamenameal} /></div>
			<div id="Animals"><img src={Animals} /></div>
			<div id="Animalscopy"><img src={Animalscopy} /></div>
			<div id="Animalscopy3"><img src={Animalscopy3} /></div>
	    </div>
        <div style={{ height: "19m", width: "100vw" }}>
        <img 
          src={nft_meet_real}
          className="imgclass"
          style={{ width: "12em", position: "relative" ,padding:"15px 5px"}}
          alt="Where NFT meet Real World"
        />
        <p
          style={{ fontSize: "0.6em", margin: "0 15%", textAlign: "justify" }}
          className="animate__animated animate__flip"
        >
          ANIMAL WORLD is a dynamic tokenized, environmentally sustainable
          PROJECT IN THE FORM OF
          <span className="orangeText">
            {" "}
            futuristic MULTI-CHAIN farM BUILDING game.
          </span>
          It offers a riveting simulated gameplay iN which a player can collect,
          own, trade and exchange farming assets and winnings. We at ANIMAL
          WORLD are committed towards enabling and building a community of
          ecologically aware individuals who will engage in a self-sustainable
          and{" "}
          <span className="orangeText">
            {" "}
            ecologically positive farming.{" "}
          </span>{" "}
          The project runs on a
          <span className="orangeText"> real-time basis </span>with
          user-friendly accessibility and consistent monitoring.
        </p>

      </div>
      <img
          src={game}
          className="animate__animated animate__flip"
          style={{
            width: "12em",
            position: "relative",
            margin: "1em 0",
          }}
          alt="the Game"
        />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "0",
        }}
      >
        {data.map((i) => (
          <Banner titleText={i[0]} para={i[1]} />
        ))}
      </div>
     </>
  );
};

export default Home;
