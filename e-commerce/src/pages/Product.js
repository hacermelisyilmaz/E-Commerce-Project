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
              <div id="slide1" className="carousel-item relative w-full">
                <img src={details.images.img1} className="w-full" />
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
                <img src={details.images.img2} className="w-full" />
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
            <div className="flex w-full py-5 gap-5">
              <a href="#slide1" className="w-24 h-20">
                <img src={details.images.img1} className="w-full" />
              </a>
              <a href="#slide2" className="w-24 h-20">
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

      <div>
        <div>
          <Link to="#">{nav[0]}</Link>
          <Link to="#">{nav[1]}</Link>
          <Link to="#">{nav[2]}</Link>
        </div>
        <hr />
        <div className="flex">
          <img src={description.img} />
          <div>
            <h5>{description.title1}</h5>
            <div>
              {description.p.map((bullet, index) => {
                return (
                  <div key={index}>
                    <p>{bullet}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div>
              <h5>{description.title2}</h5>
              <div>
                {description.b1.map((bullet, index) => {
                  return (
                    <div key={index}>
                      <FontAwesomeIcon icon={faAngleRight} />
                      <p>{bullet}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h5>{description.title3}</h5>
              <div>
                {description.b2.map((bullet, index) => {
                  return (
                    <div key={index}>
                      <FontAwesomeIcon icon={faAngleRight} />
                      <p>{bullet}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-info">
        <h3>{bestseller.title}</h3>
        <hr />
        <div>
          {bestseller.products.map((product, index) => {
            <ProductCard key={index} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
