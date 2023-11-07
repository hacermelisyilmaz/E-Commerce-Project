import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

import fetchStates from "../store/fetchStates";
import { setProductList } from "../store/actions/productActions";
import Clients from "../components/layout/Clients";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Spinner from "../components/Spinner";

function Product({ data }) {
  const { nav, bestseller, details, desc } = data.product;
  const { productID } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { productList, fetchState } = useSelector(
    (store) => store.product.products
  );
  const [productData] = productList.filter((p) => p.id == productID);
  console.log(productData);
  const ratingArr = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(Math.round(productData?.rating))) ratingArr.push(1);
    else ratingArr.push(0);
  }

  useEffect(() => {
    dispatch(setProductList({}));
  }, []);

  if (fetchState === fetchStates.FETCH_FAILED) {
    toast.error("Fetch failed. Try again");
    return <div className="Product"></div>;
  } else if (fetchState === fetchStates.FETCHED) {
    return (
      <div className="Product">
        <Header data={data} />

        <div className="bg-info px-44 sm:px-8">
          <div className="py-6">
            <nav className="py-2 text-sm flex items-center gap-4 sm:justify-center">
              <Link to="/" className="font-bold">
                {details.history.prev}
              </Link>
              <i className="fa-solid fa-angle-right selection:text-neutral text-base"></i>
              <Link to="/team" className="text-neutral">
                {details.history.current}
              </Link>
            </nav>
          </div>

          <div className="flex justify-between gap-7 sm:flex-col">
            <div>
              <div className="carousel w-full">
                {productData?.images.map((img, index) => {
                  return (
                    <div
                      id={`product${index + 1}`}
                      key={index}
                      className="carousel-item relative w-full"
                    >
                      <img src={img} className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          href="#product2"
                          className="btn btn-circle bg-transparent"
                        >
                          <i
                            className="fa-solid fa-chevron-left text-5xl"
                            style={{ color: "#ffffff" }}
                          ></i>
                        </a>
                        <a
                          href="#product2"
                          className="btn btn-circle bg-transparent"
                        >
                          <i
                            className="fa-solid fa-chevron-right marker:text-5xl"
                            style={{ color: "#ffffff" }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full py-5 gap-5">
                {productData?.images.map((img, index) => {
                  return (
                    <a
                      href={`#product${index + 1}`}
                      key={index}
                      className="w-24 h-20"
                    >
                      <img src={img} className="w-full" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 pt-3">
              <h3 className="text-[1.25rem] leading-[1.875rem]">
                {productData?.name}
              </h3>
              <div className="mt-3 flex gap-3 items-center">
                <div className="flex gap-1">
                  {ratingArr.map((star, index) => {
                    return (
                      <i
                        key={index}
                        className="fa-solid fa-star"
                        style={
                          star ? { color: "#F3CD03" } : { color: "#f3cf033d" }
                        }
                      ></i>
                    );
                  })}
                </div>
                <p className="text-sm text-accent font-bold">
                  {productData?.rating}
                </p>
              </div>
              <h4 className="mt-5 text-2xl font-bold">
                {productData?.price} ₺
              </h4>
              <div className="mt-1 text-sm leading-6 font-bold text-accent">
                <span>{details.availability.status}</span>
              </div>
              <p className="mt-8 text-sm">{productData?.description}</p>
              <hr className="my-7" />
              <img src="/img/posts/product-colors.png" />
              <div className="mt-16 flex items-center gap-2">
                <button className="text-sm leading-6 text-white font-bold border-0 border-solid rounded py-[10px] px-5 bg-secondary w-fit">
                  {details.button}
                </button>
                <i className="fa-regular fa-heart border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"></i>
                <i className="fa-solid fa-cart-shopping border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"></i>
                <i className="fa-regular fa-eye border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="px-44 sm:px-8">
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
          <div className="pt-6 flex justify-between sm:flex-col">
            <img src={desc.img} className="object-contain" />
            <div className="flex flex-col gap-7 mx-7 w-1/3 sm:w-full sm:mx-0 sm:my-6">
              <h5 className="text-2xl font-bold">{desc.title1}</h5>
              <div className="text-sm text-accent flex flex-col gap-5">
                {desc.p.map((bullet, index) => {
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
                <h5 className="text-2xl">{desc.title2}</h5>
                <div className="flex flex-col gap-2">
                  {desc.b1.map((bullet, index) => {
                    return (
                      <div
                        key={index}
                        className="flex text-sm text-accent gap-5"
                      >
                        <i className="fa-solid fa-angle-right text-base"></i>
                        <p>{bullet}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-7 pt-6">
                <h5 className="text-2xl">{desc.title3}</h5>
                <div className="flex flex-col gap-2">
                  {desc.b2.map((bullet, index) => {
                    return (
                      <div
                        key={index}
                        className="flex text-sm text-accent gap-5"
                      >
                        <i className="fa-solid fa-angle-right text-base"></i>
                        <p>{bullet}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-info py-12 px-44 flex flex-col gap-6 sm:px-10 sm:items-center">
          <h3 className="text-2xl font-bold">{bestseller.title}</h3>
          <hr />
          {/*  <div className="flex flex-wrap justify-between">
          {bestseller.products.map((product, index) => {
            return <ProductCard key={index} data={product} />;
          })}
        </div> */}
        </div>

        <Clients data={data.clients} bg={true} />
        <Footer data={data} inner={true} />
      </div>
    );
  } else if (fetchState === fetchStates.FETCHING) {
    return (
      <div className="Product py-48 flex justify-center">
        <Spinner />
      </div>
    );
  } else {
    toast.error("Product not found.");
    history.push("/shopping");
    return <div className="Product"></div>;
  }
}

export default Product;
