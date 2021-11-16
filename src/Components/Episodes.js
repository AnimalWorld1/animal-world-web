import AboutCard from "./AboutCard";
import episodes_1 from "../assets/episodes-img-1.webp";
import episodes_2 from "../assets/episodes-img-2.webp";
import episodes_3 from "../assets/episodes-img-3.webp";
import episodes_4 from "../assets/episodes-img-4.webp";
import episodes_5 from "../assets/episodes-img-5.webp";
import episodes_6 from "../assets/episodes-img-6.webp";
import episodes_7 from "../assets/episodes-img-7.webp";
import episodes_8 from "../assets/episodes-img-8.webp";
import episodes_9 from "../assets/episodes-img-9.webp";
import episodes_10 from "../assets/episodes-img-10.webp";
import episodes_11 from "../assets/episodes-img-11.webp";
import CarouselCard from "./CarouselCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Episodes = () => {
  const para = `EPISODES REFER TO the sequence of events as to how the
  real-time ANIMAL WORLD is projected to be
  built over the course of time.`;
  const carouselData = [
    [
      `During the initial stage, ANIMAL WORLD will witness laying down of a
  robust foundational infrastructure. Players can invovle in border
  construction and commercial fruit tree plantation-1. Bamboo trees will
  also be used to fence the borders. Another item on the agenda is to set
  up a Pond which will serve as an access to the periphery of the ANIMAL
  WORLD by means of boats. It will be connected to the Miyawaki forest by
  a canal system.`,
      episodes_2,
      episodes_3,
    ],
    [
      `The gameplay moves forward with players now participating in the 
      construction of the tent houses, and honeybee breeding grounds. 
      Similar to EPISODE-1 another commercial fruit tree plantation-2 will be done. 
      Furthermore, ANIMAL WORLD will have its first Miyawaki Forest, a dense region 
      adjoining to the Pond.`,
      episodes_4,
      episodes_5,
    ],
    [
      `This stage will open up a number of construction projects including a
     Forest House and a Central Garden. Animals like horses, ducks, goats, 
     hen buffaloes, and cows will be reared on tbe ANIMAL WORLD. They will be 
     sources of rich food products and also form a sustainable ecosystem within
      the ANIMAL WORLD.`,
      episodes_6,
      episodes_7,
    ],
    [
      `At this point, we bring the advanced machinery into play. 
    Utilizing the potential of robotics when coupled with AI enabled 
    programming, ANIMAL WORLD will host smart irrigation techniques like Drip 
    Irrigation, pesticide sprays using drones, and others. To augment the 
    self-reliability of ANIMAL WORLD, solar panels will be installed for electricity 
    production and distribution within the project area. The whole setup will be 
    monitored by new-age security cameras.`,
      episodes_8,
      episodes_9,
    ],
    [
      `On reaching the final step of building the ANIMAL WORLD , 
    we are now looking at setting up accommodations of various kinds. 
    There will be luxurious hotels which will draw their electricity 
    from the solar panels with zero carbon footprint in the running. 
    Besides that, cave houses using rocks and villas with themes of 
    both ancient and medieval times are also in the pipeline. Subsequently, 
    the ANIMAL WORLD will now have active farming using Hydroponics in the 
    greenhouse built specifically for this purpose`,
      episodes_10,
      episodes_11,
    ],
  ];
  return (
    <div style={{marginTop:"2em"}}>
      <AboutCard titleImg={episodes_1} para={para} />
      <div class="slideshow-container">
        <Carousel autoPlay>
          {carouselData.map((i) => (
            <CarouselCard
              idx={i}
              para={i[0]}
              banner_img={i[1]}
              title_img={i[2]}
              total={carouselData.length}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Episodes;
