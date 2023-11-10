import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";

import Clients from "../components/layout/Clients";
import Features from "../components/Features";
import Footer from "../components/layout/Footer";
import Posts from "../components/Posts";
import ProductCards from "../components/ProductCards";
import ShopCards from "../components/ShopCards";
import Vision from "../components/Vision";
import Header from "../components/layout/Header";

function Home({ data }) {
  const history = useHistory();

  const carousel = [
    {
      img: "/img/carousel/first-3x.png",
      subtitle: "SUMMER 2023",
      title: "NEW COLLECTION",
      description1: "We know how large objects will act,",
      description2: "but things on a small scale.",
      button: "SHOP NOW",
    },
    {
      img: "/img/carousel/second-3x.png",
      season: "SUMMER 2023",
      header: "-30% DISCOUNT",
      description1: "We know how large objects will act,",
      description2: "but things on a small scale.",
      button: "READ MORE",
    },
  ];

  return (
    <div className="Home">
      <Header data={data} />

      <div className="BannerSlide py-12 w-[90%] mx-auto">
        <div className="carousel w-full h-[38rem] rounded-[20px] sm:h-fit">
          <div id="slide1" className="carousel-item w-full bg">
            <div className="w-full flex justify-start items-center sm:flex-col sm:gap-12">
              <div className="pl-28 flex flex-col text-left gap-[1.8rem] sm:px-12 sm:pt-20 sm:text-center sm:items-center">
                <h5 className="font-bold text-secondary">
                  {carousel[0].subtitle}
                </h5>
                <h2 className="font-bold text-6xl sm:text-4xl">
                  {carousel[0].title}
                </h2>
                <div className="text-xl text-accent">
                  <p>{carousel[0].description1}</p>
                  <p>{carousel[0].description2}</p>
                </div>
                <button
                  className="font-bold text-2xl text-white bg-secondary w-fit border-solid rounded-[5px] px-9 py-4"
                  onClick={() => history.push("/shopping")}
                >
                  {carousel[0].button}
                </button>
              </div>
              <img src={carousel[0].img} className="object-contain h-full" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-transparent">
                <i className="fa-solid fa-chevron-left text-5xl text-white"></i>
              </a>
              <a href="#slide2" className="btn btn-circle bg-transparent">
                <i className="fa-solid fa-chevron-right text-5xl text-white"></i>
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex justify-end items-center">
              <div className="text-content flex flex-col w-1/2 text-left gap-[1.8rem]">
                <h5 className="font-bold">{carousel[1].season}</h5>
                <h2 className="font-bold text-6xl">{carousel[1].header}</h2>
                <div className="text-xl">
                  <p>{carousel[1].description1}</p>
                  <p>{carousel[1].description2}</p>
                </div>
                <button
                  className="font-bold text-2xl text-white bg-secondary w-1/3 border-solid rounded-[5px] px-9 py-4"
                  onClick={() => history.push("/shopping")}
                >
                  {carousel[1].button}
                </button>
              </div>
              <div className="slide-img w-[38%] right-0">
                <img src={carousel[1].img} />
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle bg-transparent">
                  <i className="fa-solid fa-chevron-left text-5xl text-white"></i>
                </a>
                <a href="#slide1" className="btn btn-circle bg-transparent">
                  <i className="fa-solid fa-chevron-right text-5xl text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Clients />
      <ShopCards data={data.shopcards} />
      <ProductCards data={data.productcards} />
      <Vision data={data.vision} />
      <Features data={data.features} />
      <Posts data={data.posts} />
      <Footer data={data} inner={false} />
    </div>
  );
}

export default Home;
