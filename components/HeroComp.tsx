import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function HeroComp() {
  const data = [
    { img: "scenery1.jpg", text: "show this text" },
    { img: "scenery2.jpg", text: "show this text" },
    { img: "scenery3.jpg", text: "show this text" },
  ];

  return (
    <div className=" overflow-hidden">
      <Carousel
        autoPlay
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        dynamicHeight={true}
      >
        {data.map((elem) => {
          return (
            <img
              src={elem.img}
              alt=""
              className="object-cover h-[200px] md:h-[300px]"
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default HeroComp;
