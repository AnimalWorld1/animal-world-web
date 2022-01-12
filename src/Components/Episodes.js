import AboutCard from "./AboutCard";
import episodes_1 from "../assets/episodes-img-1.webp";
import CarouselCard from "./CarouselCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Episodesvideos from "./Episodesvideos";
const Episodes = () => {
const para = [
  [
    `EPISODES REFER TO the sequence of events as to how the
    real-time ANIMAL WORLD is projected to be
    built over the course of time.`,
  ],
];
return (
  <div style={{marginTop:"2em"}}>
    <AboutCard titleImg={episodes_1} para={para} />
    <Episodesvideos />
  </div>
  );
};

export default Episodes;
