import img_aboutus_1 from "../assets/aboutus1.webp";
import img_aboutus_4 from "../assets/aboutus4.webp";
import img_aboutus_7 from "../assets/aboutus7.webp";
import AboutCard from "./AboutCard";

const About = () => {
  const data = [
    [
      `ANIMAL WORLD is a dynamic tokenized, environmentally sustainable
  project in the form of futuristic multi-chain farm building game. It
  offers a riveting simulated gameplay in which a player can collect,
  own, trade and exchange farming assets and winnings. We at ANIMAL
  WORLD are committed towards enabling and building a community of
  ecologically aware individuals who will engage in a self-sustainable
  and ecologically positive farming. The project runs on a real-time
  basis with user-friendly accessibility and consistent monitoring.`,
      img_aboutus_1,
    ],
    [
      `The idea of the DreamFarm was conceptualised on 16th May 2021. It was
  ideated to instil an idea of sustainable farming and modern-age
  techniques to effectively utilise resources at our hand. We are a
  handful of gamers and tech-enthusiasts who have worked on multiple
  blockchain projects successively. Coming around an idea of our own
  took some time as we always wanted to bring a change in the world and
  impact as many lives as we could possibly do. Our group comprises of
  people from different backgrounds which adds on to a diverse approach
  and multidimensional expertise`,
      img_aboutus_4,
    ],
    [
      `Our team shares a fundamental vision of making this world a far better
  place for our successive generations. When we reached upon this
  proposition our gaming background got amalgamated with our mission. We
  are dedicated towards encouraging the NFT community to engage with
  ANIIMAL WORLD which offers in-game earnings as well as earnings from
  real-farm products as well. We are on a mission to give the NFT space
  a direction of purpose and a cause worthy enough to associate with.`,
      img_aboutus_7,
    ],
  ];
  return (
    <div style={{marginTop:"2em"}}>
      {data.map(i=><AboutCard para={i[0]} titleImg={i[1]} />)}
    </div>
  );
};

export default About;
