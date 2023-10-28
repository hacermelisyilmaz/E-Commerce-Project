import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";

function BannerSlide({ data }) {
  const history = useHistory();
  return (
    <div className="BannerSlide py-12 w-[90%] mx-auto">
      <div className="carousel w-full h-[38rem] rounded-[20px] sm:h-fit">
        <div id="slide1" className="carousel-item w-full bg">
          <div className="w-full flex justify-start items-center sm:flex-col sm:gap-12">
            <div className="pl-28 flex flex-col text-left gap-[1.8rem] sm:px-12 sm:pt-20 sm:text-center sm:items-center">
              <h5 className="font-bold text-secondary">{data[0].subtitle}</h5>
              <h2 className="font-bold text-6xl sm:text-4xl">
                {data[0].title}
              </h2>
              <div className="text-xl text-accent">
                <p>{data[0].description1}</p>
                <p>{data[0].description2}</p>
              </div>
              <button
                className="font-bold text-2xl text-white bg-secondary w-fit border-solid rounded-[5px] px-9 py-4"
                onClick={() => history.push("/shopping")}
              >
                {data[0].button}
              </button>
            </div>
            <img src={data[0].img} className="object-contain h-full" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent">
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ color: "#ffffff" }}
                className="text-5xl"
              />
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent">
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#ffffff" }}
                className="text-5xl"
              />
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
                onClick={() => history.push("/shopping")}
              >
                {data[1].button}
              </button>
            </div>
            <div className="slide-img w-[38%] right-0">
              <img src={data[1].img} />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-transparent">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ color: "#ffffff" }}
                  className="text-5xl"
                />
              </a>
              <a href="#slide1" className="btn btn-circle bg-transparent">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#ffffff" }}
                  className="text-5xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlide;
