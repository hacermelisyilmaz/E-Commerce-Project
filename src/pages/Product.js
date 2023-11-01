import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Clients from "../components/layout/Clients";
import Footer from "../components/layout/Footer";

function Product({ data }) {
  const { details, nav, description, bestseller } = data.product;
  const ratingArr = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(details.rating)) ratingArr.push(1);
    else ratingArr.push(0);
  }

  return (
    <div className="Product">
      <Header data={data} />

      <div className="bg-info px-44">
        <div className="py-6">
          <nav className="py-2 text-sm flex items-center gap-4">
            <Link to="/" className="font-bold">
              {details.history.prev}
            </Link>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-neutral text-base"
            />
            <Link to="/team" className="text-neutral">
              {details.history.current}
            </Link>
          </nav>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="carousel w-full">
              <div id="product1" className="carousel-item relative w-full">
                <img src={details.images.img1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#product2" className="btn btn-circle bg-transparent">
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      style={{ color: "#ffffff" }}
                      className="text-5xl"
                    />
                  </a>
                  <a href="#product2" className="btn btn-circle bg-transparent">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ color: "#ffffff" }}
                      className="text-5xl"
                    />
                  </a>
                </div>
              </div>
              <div id="product2" className="carousel-item relative w-full">
                <img src={details.images.img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#product1" className="btn btn-circle bg-transparent">
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      style={{ color: "#ffffff" }}
                      className="text-5xl"
                    />
                  </a>
                  <a href="#product1" className="btn btn-circle bg-transparent">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ color: "#ffffff" }}
                      className="text-5xl"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full py-5 gap-5">
              <a href="#product1" className="w-24 h-20">
                <img src={details.images.img1} className="w-full" />
              </a>
              <a href="#product2" className="w-24 h-20">
                <img src={details.images.img2} className="w-full" />
              </a>
            </div>
          </div>

          <div>
            <h3>{details.name}</h3>
            <div>
              <div className="flex gap-1">
                {ratingArr.map((star, index) => {
                  return (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      style={
                        star ? { color: "#F3CD03" } : { color: "#f3cf033d" }
                      }
                    />
                  );
                })}
              </div>
              <p>{details.ratingno}</p>
            </div>
            <h4>{details.price}</h4>
            <div>
              <span>{details.availability.av}</span>
              <span>{details.availability.status}</span>
            </div>
            <p>{details.description}</p>
            <hr />
            <img src="/img/posts/product-colors.png" />
            <div>
              <button className="text-sm text-white border-0 border-solid rounded py-2 px-5 bg-secondary w-fit">
                {details.button}
              </button>
              <FontAwesomeIcon
                icon={faHeart}
                className="border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"
              />
              <FontAwesomeIcon
                icon={faCartShopping}
                className="border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"
              />
              <FontAwesomeIcon
                icon={faEye}
                className="border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-44">
        <div className="py-3 flex justify-center font-bold text-accent">
          <Link to="#" className="p-6">
            {nav[0]}
          </Link>
          <Link to="#" className="p-6">
            {nav[1]}
          </Link>
          <Link to="#" className="p-6">
            {nav[2]}
          </Link>
        </div>
        <hr className="pb-4" />
        <div className="pt-6 flex justify-between">
          <img src={description.img} />
          <div className="flex flex-col gap-7 mx-7 w-1/3">
            <h5 className="text-2xl font-bold">{description.title1}</h5>
            <div className="text-sm text-accent flex flex-col gap-5">
              {description.p.map((bullet, index) => {
                return (
                  <div key={index}>
                    <p>{bullet}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="font-bold">
            <div className="flex flex-col gap-7">
              <h5 className="text-2xl">{description.title2}</h5>
              <div className="flex flex-col gap-2">
                {description.b1.map((bullet, index) => {
                  return (
                    <div key={index} className="flex text-sm text-accent gap-5">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-base"
                      />
                      <p>{bullet}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-7 pt-6">
              <h5 className="text-2xl">{description.title3}</h5>
              <div className="flex flex-col gap-2">
                {description.b2.map((bullet, index) => {
                  return (
                    <div key={index} className="flex text-sm text-accent gap-5">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-base"
                      />
                      <p>{bullet}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-info py-12 px-44 flex flex-col gap-6">
        <h3>{bestseller.title}</h3>
        <hr />
        <div className="flex flex-wrap justify-between">
          {bestseller.products.map((product, index) => {
            return <ProductCard key={index} data={product} />;
          })}
        </div>
      </div>

      <Clients data={data.clients} bg={true} />
      <Footer data={data} inner={true} />
    </div>
  );
}

export default Product;
