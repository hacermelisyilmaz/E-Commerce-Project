import {
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { setProductList } from "../store/actions/productActions";
import useQueryParams from "../hooks/useQueryParams";
import Products from "./Products";
import { useParams } from "react-router-dom";

function Shop({ data }) {
  const products = useSelector((store) => store.product.products);
  const categories = useSelector(
    (store) => store.product.categories.categoryList
  );
  const { totalProductCount } = products;

  const dispatch = useDispatch();

  const { category } = useParams();

  const [filterParams, setFilterParams] = useState({
    filter: "",
    sort: "",
  });
  const [queryParams, setQueryParams] = useQueryParams();

  const clickHandler = (e) => {
    e.target.classList.add("bg-secondary");
    e.target.classList.add("text-white");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQueryParams(filterParams);
  };

  useEffect(() => {
    const categoryId = categories.find((c) => c.code == category)?.id;
    dispatch(setProductList({ ...queryParams, category: categoryId }));
  }, [queryParams, category]);

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
          id="filter"
          name="filter"
          placeholder="Search"
          className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
          onChange={(e) => {
            setFilterParams({ ...filterParams, filter: e.target.value });
          }}
        />
        <div className="flex gap-3">
          <select
            id="sort"
            name="sort"
            className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
            defaultValue={data.fopt1}
            onChange={(e) => {
              setFilterParams({ ...filterParams, sort: e.target.value });
            }}
          >
            <option value="price:asc">{data.p_asc}</option>
            <option value="price:desc">{data.p_desc}</option>
            <option value="rating:asc">{data.r_asc}</option>
            <option value="rating:desc">{data.r_desc}</option>
          </select>
          <button
            type="submit"
            className="text-white bg-secondary border-0 border-solid rounded-[5px] py-3 px-5"
          >
            {data.button}
          </button>
        </div>
      </form>

      <Products data={products} />

      <div className="mt-8 flex justify-center font-bold text-secondary bg-white w-fit mx-auto border border-solid border-neutral rounded-lg">
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
