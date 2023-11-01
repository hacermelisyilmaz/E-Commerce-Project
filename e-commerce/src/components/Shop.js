import {
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { setProductList } from "../store/actions/productActions";
import ProductCard from "./ProductCard";

function Shop({ data }) {
  const products = useSelector((store) => store.product.products);
  const { productList, totalProductCount } = products;

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [axiosParams, setAxiosParams] = useState({
    category: "",
    search: "",
    sort: "",
  });

  console.log("location: ", location);

  const clickHandler = (e) => {
    e.target.classList.add("bg-secondary");
    e.target.classList.add("text-white");
  };

  const createQueryString = (queryObject = {}) => {
    let queryString = Object.keys(queryObject)
      .filter(
        (key) =>
          queryObject[key] &&
          !(Array.isArray(queryObject[key]) && !queryObject[key].length)
      )
      .map((key) => {
        return Array.isArray(queryObject[key])
          ? queryObject[key]
              .map(
                (item) =>
                  `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
              )
              .join("&")
          : `${encodeURIComponent(key)}=${encodeURIComponent(
              queryObject[key]
            )}`;
      })
      .join("&");
    return queryString ? `?${queryString}` : "";
  };

  const submitHandler = (axiosParams) => {
    history.push({
      pathname: location.pathname,
      search: createQueryString(axiosParams),
    });
  };

  useEffect(() => {
    dispatch(setProductList(axiosParams));
  }, []);

  useEffect(() => {
    setAxiosParams({ ...axiosParams, category: location.pathname.slice(10) });
    setAxiosParams({
      ...axiosParams,
      search: location.search.slice(8, location.search.indexOf("&")),
    });
    //setAxiosParams({...axiosParams, sort: location.search.slice(8, location.search.indexOf("&"))});

    console.log("axios params: ", axiosParams);
    dispatch(setProductList(axiosParams));
  }, [axiosParams]);

  return (
    <div className="Shop">
      <form
        className="w-3/4 mx-auto py-6 flex justify-between items-center sm:flex-col sm:items-center sm:gap-6"
        onSubmit={submitHandler}
      >
        <p>{data.showing + totalProductCount + data.results}</p>
        <div className="flex gap-2 items-center">
          <p>{data.views}</p>
          <div className="border rounded-md p-2">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </div>
          <div className="border border-info rounded-md p-2">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
        </div>
        <input
          id="search"
          name="search"
          placeholder="Search"
          className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
          onChange={(e) => {
            setAxiosParams({ ...axiosParams, search: e.target.value });
          }}
        />
        <div className="flex gap-3">
          <select
            id="sort"
            name="sort"
            className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
            defaultValue={data.fopt1}
            onChange={(e) => {
              setAxiosParams({ ...axiosParams, sort: e.target.value });
            }}
          >
            <option value="popularity">{data.fopt1}</option>
            <option value="price-asc">{data.fopt2}</option>
            <option value="price-desc">{data.fopt3}</option>
          </select>
          <button
            type="submit"
            className="text-white bg-secondary border-0 border-solid rounded-[5px] py-3 px-5"
          >
            {data.button}
          </button>
        </div>
      </form>
      <div className="flex flex-wrap justify-center gap-7 w-3/4 mx-auto sm:flex-col sm:items-center sm:gap-4">
        {productList.map((card) => {
          return <ProductCard data={card} key={card.id} />;
        })}
      </div>
      <div className="flex justify-center font-bold text-secondary bg-white w-fit mx-auto border border-solid border-neutral rounded-lg">
        <button
          className="text-base py-6 px-6 border border-solid border-neutral"
          onClick={clickHandler}
        >
          {data.pagebuttons.first}
        </button>
        <button
          className="text-base py-6 px-5 border border-solid border-neutral"
          onClick={clickHandler}
        >
          1
        </button>
        <button
          className="text-base py-6 px-5 border border-solid border-neutral"
          onClick={clickHandler}
        >
          2
        </button>
        <button
          className="text-base py-6 px-5 border border-solid border-neutral"
          onClick={clickHandler}
        >
          3
        </button>
        <button
          className="text-base py-6 px-6 border border-solid border-neutral"
          onClick={clickHandler}
        >
          {data.pagebuttons.next}
        </button>
      </div>
    </div>
  );
}

export default Shop;
