import Token from "./Token";
import Roadmap from "./Roadmap";
import Divider from "./Divider";
import Treepack from "./Treepack";
import Possesion from "./Possesion";
import Blending from "./Blending";
import Blending1 from "./Blending1";
import YieldCard from "./YieldCard";
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
import mythic from "../assets/mythic.gif"
import mangotree from "../assets/mangotree.webp"
import lemon from "../assets/lemon.gif"
import fig from "../assets/fig.gif";
import coconut from "../assets/coconut.gif"
import collectall from "../assets/collectall.webp";


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
      <BannerImg />
      <a
        href="https://pdfhost.io/v/ASFrJYDno_09983c_dcc20644b51d42eb85668c694f6d9fe5_6"
        target="_blank"
        class="btn_normal"
      >
        <span> White Paper</span>
      </a>
      <div style={{ height: "19m", width: "100vw" }}>
        <img
          src={nft_meet_real}
          className="animate__animated animate__flip"
          style={{ width: "18em", position: "relative"}}
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
      </div>
      <Divider />
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
      <div class="slideshow-container" style={{margin:0,height:"12em"}}>
        <Carousel autoPlay>
          {howToPlayData.map((i, idx) => (
            <PlayCard
              idx={idx}
              para={i[0]}
              bannerStyle={i[1]}
              text_c={i[2]}
              title_img={i[3]}
              commonImg={howtoplay_img}
              total={howToPlayData.length}
            />
          ))}</Carousel>
      </div>
      <Divider />
      <Treepack />
      <div class="slideshow-container" style={{margin:0,height:"12.7em"}}>
        <Carousel autoPlay>
          {collectAllData.map((i, idx) => (
            <PlayCard
              idx={idx}
              para={i[0]}
              bannerStyle={i[1]}
              title_img={i[2]}
              commonImg={collectall}
              total={howToPlayData.length}
            />
          ))}
        </Carousel>
      </div>
      <Divider />
      <Possesion/>
        <Divider />
      <Blending />
        <Blending1 />
        <Divider />
        <YieldCard />
        <Divider />
      <Token />
      <Divider/>
      <Roadmap />
    </>
  );
};

export default Home;
