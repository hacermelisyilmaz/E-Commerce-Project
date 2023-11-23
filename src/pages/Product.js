import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  addToCart,
  updateCartItemQuantity,
} from "../store/actions/shoppingCartActions";

import Clients from "../components/layout/Clients";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ProductCard from "../components/ProductCard";
import axiosInstance from "../api/axiosInstance";

function Product({ data }) {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();
  const { cart } = useSelector((store) => store.shopping);
  const productList = useSelector(
    (store) => store.product.products.productList
  );

  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  const ratingArr = [];
  for (let i = 0; i < 5; i++) {
    if (isLoading && i < parseInt(Math.round(product.rating)))
      ratingArr.push(1);
    else ratingArr.push(0);
  }

  const addingToCartHandler = () => {
    let isAvailable = false;
    cart.map((item) => {
      if (item.product.id == productID) isAvailable = true;
      return item;
    });
    console.log(isAvailable);
    isAvailable
      ? dispatch(updateCartItemQuantity(productID, true))
      : dispatch(addToCart(product));

    toast.success("You added the product to your basket.");
  };

  useEffect(() => {
    axiosInstance
      .get(`/products/${productID}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(true);
      })
      .catch((error) => {
        toast.error("Fetch failed. Try again");
      });
  }, [productID]);

  return (
    <div className="Product sm:flex sm:flex-col">
      <Header />

      <div className="bg-info px-44 pb-12 sm:px-8">
        <div className="py-6">
          <nav className="py-2 text-sm flex items-center gap-4 sm:justify-center">
            <i className="fa-solid fa-angle-left selection:text-neutral text-base"></i>
            <a
              className="font-bold"
              onClick={() => {
                history.push(`${state.pathname}/${state.search}`);
              }}
            >
              Back
            </a>
          </nav>
        </div>

        {isLoading && (
          <div className="flex justify-between gap-7 h-[32rem] sm:h-auto sm:flex-col">
            <div className="w-2/3 h-full sm:w-full">
              <div className="carousel w-full h-[80%]">
                {product?.images.map((img, index) => {
                  return (
                    <div
                      id={`product${index + 1}`}
                      key={index}
                      className="carousel-item relative w-full"
                    >
                      <img src={img.url} className="w-full object-cover" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          href="#product2"
                          className="btn btn-circle bg-transparent"
                        >
                          <i
                            className="fa-solid fa-chevron-left text-5xl"
                            style={{ color: "#BDBDBD" }}
                          ></i>
                        </a>
                        <a
                          href="#product2"
                          className="btn btn-circle bg-transparent"
                        >
                          <i
                            className="fa-solid fa-chevron-right text-5xl"
                            style={{ color: "#BDBDBD" }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full py-5 gap-5">
                {product?.images.map((img, index) => {
                  return (
                    <a
                      href={`#product${index + 1}`}
                      key={index}
                      className="w-24 h-20 overflow-hidden"
                    >
                      <img src={img.url} className="w-full object-cover" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 pt-3">
              <h3 className="text-[1.25rem] leading-[1.875rem]">
                {product.name}
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
                  {product.rating} / 5.00
                </p>
              </div>
              <h4 className="mt-5 text-2xl font-bold">{product?.price} ₺</h4>
              <div className="mt-1 text-sm leading-6 font-bold text-accent">
                <span>In Stock</span>
              </div>
              <p className="mt-8 text-sm">{product?.description}</p>
              <hr className="my-7" />
              <img src="/img/posts/product-colors.png" />
              <div className="mt-16 flex items-center gap-2">
                <button
                  className="text-sm leading-6 text-white font-bold border-0 border-solid rounded py-[10px] px-5 bg-secondary w-fit"
                  onClick={addingToCartHandler}
                >
                  Add to Cart
                </button>
                <div className="border border-solid border-neutral rounded-[45px] p-3">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="border border-solid border-neutral rounded-[45px] p-3">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="border border-solid border-neutral rounded-[45px] p-3">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-44 sm:px-8">
        <div className="py-3 flex justify-center font-bold text-accent">
          <Link to="#" className="p-6">
            Description
          </Link>
          <Link to="#" className="p-6">
            Additional Information
          </Link>
          <Link to="#" className="p-6">
            Reviews
          </Link>
        </div>
        <hr className="pb-4" />
        <div className="pt-6 flex justify-between sm:flex-col">
          <img src="/img/product/desc.png" className="object-contain" />
          <div className="flex flex-col gap-7 mx-7 w-1/3 sm:w-full sm:mx-0 sm:my-6">
            <h5 className="text-2xl font-bold">"the quick fox jumps over"</h5>
            <div className="text-sm text-accent flex flex-col gap-5">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="font-bold">
            <div className="flex flex-col gap-7">
              <h5 className="text-2xl">the quick fox jumps over</h5>
              <div className="flex flex-col gap-2">
                <div className="flex text-sm text-accent gap-5">
                  <i className="fa-solid fa-angle-right text-base"></i>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex text-sm text-accent gap-5">
                  <i className="fa-solid fa-angle-right text-base"></i>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex text-sm text-accent gap-5">
                  <i className="fa-solid fa-angle-right text-base"></i>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex text-sm text-accent gap-5">
                  <i className="fa-solid fa-angle-right text-base"></i>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7 pt-6">
              <h5 className="text-2xl">the quick fox jumps over</h5>
              <div className="flex flex-col gap-2">
                <div className="flex text-sm text-accent gap-5">
                  <i className="fa-solid fa-angle-right text-base"></i>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex text-sm text-accent gap-5">
                  <i className="fa-solid fa-angle-right text-base"></i>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex text-sm text-accent gap-5">
                  <i className="fa-solid fa-angle-right text-base"></i>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-info py-12 px-44 flex flex-col gap-6 sm:px-10 sm:items-center">
        <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
        <hr />
        {isLoading && (
          <div className="flex flex-wrap justify-between sm:justify-center">
            {productList?.slice(0, 8).map((product, index) => {
              return <ProductCard key={index} data={product} />;
            })}
          </div>
        )}
      </div>

      <Clients bg={true} />
      <Footer data={data} inner={true} />
    </div>
  );
}

export default Product;
