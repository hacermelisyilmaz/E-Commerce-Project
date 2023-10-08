import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";

function BannerSlide({ data }) {
  const history = useHistory();
  return (
    <div className="BannerSlide py-12 w-[90%] mx-auto">
      <div className="carousel w-full h-[38rem] rounded-[20px]">
        <div id="slide1" className="carousel-item relative w-full bg">
          <div className="flex justify-end items-center">
            <div className="pl-28 flex flex-col text-left gap-[1.8rem]">
              <h5 className="font-bold text-secondary">{data[0].season}</h5>
              <h2 className="font-bold text-6xl">{data[0].header}</h2>
              <div className="text-xl text-accent">
                <p>{data[0].description1}</p>
                <p>{data[0].description2}</p>
              </div>
              <button
                className="font-bold text-2xl text-white bg-secondary w-fit border-solid rounded-[5px] px-9 py-4"
                onClick={() => history.push("/productlist")}
              >
                {data[0].button}
              </button>
            </div>
            <div className="h-full w-auto translate-x-16">
              <img src={data[0].img} className="h-full" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex justify-end items-center">
            <div className="text-content flex flex-col w-1/2 text-left gap-[1.8rem]">
              <h5 className="font-bold">{data[1].season}</h5>
              <h2 className="font-bold text-6xl">{data[1].header}</h2>
              <div className="text-xl">
                <p>{data[1].description1}</p>
                <p>{data[1].description2}</p>
              </div>
              <button
                className="font-bold text-2xl text-white bg-secondary w-1/3 border-solid rounded-[5px] px-9 py-4"
                onClick={() => history.push("/productlist")}
              >
                {data[1].button}
              </button>
            </div>
            <div className="slide-img w-[38%] right-0">
              <img src={data[1].img} />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlide;
