import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

function BannerSlide({ data }) {
  const history = useHistory();
  return (
    <div className="BannerSlide py-12">
      <Carousel
        className="border-solid rounded-[1.25rem] h-[38.6rem] mx-14 bg"
        showThumbs={false}
      >
        {data.map((item, index) => {
          return (
            <div className="flex justify-end items-center" key={index}>
              <div className="text-content flex flex-col w-1/2 text-left gap-[1.8rem]">
                <h5 className="font-bold">{item.season}</h5>
                <h2 className="font-bold text-6xl">{item.header}</h2>
                <div className="text-xl">
                  <p>{item.description1}</p>
                  <p>{item.description2}</p>
                </div>
                <button
                  className="font-bold text-2xl bg-primary w-1/3 border-solid rounded-[5px] px-10 py-4"
                  onClick={() => history.push("/productlist")}
                >
                  {item.button}
                </button>
              </div>
              <div className="slide-img w-[38%] right-0">
                <img src={item.img} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default BannerSlide;
