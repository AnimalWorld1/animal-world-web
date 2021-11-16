import React from "react";
import episodes_2 from "../assets/episodes-img-2.webp";
import episodes_3 from "../assets/episodes-img-3.webp";

function CarouselCard({idx,total,banner_img,title_img,para}) {
  return (
    <div className="mySlides fade">
      <img
        src={banner_img}
        className="slide-bg-img"
        style={{ width: "100%" }}
      />
      <img src={title_img} style={{height:"30%",width:"46%"}} className="episodes-title" />
      <p class="slide-para-1">
        {para}
      </p>
    </div>
  );
}

export default CarouselCard;
