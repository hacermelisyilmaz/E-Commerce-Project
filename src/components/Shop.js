import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";

import { addProducts, setProductList } from "../store/actions/productActions";
import fetchStates from "../store/fetchStates";
import useQueryParams from "../hooks/useQueryParams";
import Spinner from "../components/Spinner";
import ProductCard from "./ProductCard";

function Shop({ data }) {
  const products = useSelector((store) => store.product.products);
  const categories = useSelector(
    (store) => store.product.categories.categoryList
  );
  const { totalProductCount, fetchState, productList } = products;

  const dispatch = useDispatch();
  const { sex, category } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [filterParams, setFilterParams] = useState({
    filter: "",
    sort: "",
  });
  const [queryParams, setQueryParams] = useQueryParams();

  const infScrollingParams = {
    limit: 36,
    offset: offset,
  };

  const categoryId = categories.find((c) => c.code == `${sex}:${category}`)?.id;

  const submitHandler = (e) => {
    e.preventDefault();
    setQueryParams(filterParams);
  };

  const nextInfScroll = () => {
    dispatch(
      addProducts({
        ...queryParams,
        ...infScrollingParams,
        category: categoryId,
      })
    );
    setOffset(offset + 36);
  };

  useEffect(() => {
    dispatch(
      setProductList({
        ...queryParams,
        limit: infScrollingParams.limit,
        offset: 0,
        category: categoryId,
      })
    );
    setHasMore(true);
    setOffset(36);
  }, [queryParams, category]);

  useEffect(() => {
    if (fetchState === fetchStates.FETCH_FAILED)
      toast.error("Products failed to load. Please try again later.");
  }, [fetchState]);

  useEffect(() => {
    if (totalProductCount && productList.length === totalProductCount) {
      setHasMore(false);
    }
  }, [productList]);

  return (
    <div className="Shop">
      <form
        className="w-3/4 mx-auto py-6 flex justify-between items-center sm:flex-col sm:items-center sm:gap-6"
        onSubmit={submitHandler}
      >
        <p>
          {"Showing " +
            productList.length +
            " of all " +
            totalProductCount +
            " results"}
        </p>
        <div className="flex gap-2 items-center">
          <p>{data.views}</p>
          <div className="border rounded-md p-2">
            <i className="fa-solid fa-table-cells-large"></i>
          </div>
          <div className="border border-info rounded-md p-2">
            <i className="fa-solid fa-list-check"></i>
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
            defaultValue=""
            onChange={(e) => {
              setFilterParams({ ...filterParams, sort: e.target.value });
            }}
          >
            <option value="">Sort by</option>
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

      {fetchState === fetchStates.FETCHED && (
        <InfiniteScroll
          dataLength={productList.length}
          next={nextInfScroll}
          hasMore={hasMore}
          scrollThreshold="449px"
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
          className="infiniteScroll"
        >
          <div className="Products flex flex-wrap justify-center gap-7 w-3/4 mx-auto sm:flex-col sm:items-center sm:gap-4">
            {productList.map((product, index) => {
              const catCode = categories.find(
                (c) => c.id == product["category_id"]
              )?.code;
              const nameSlug = product.name.toLowerCase().replace(" ", "-");
              return (
                <Link
                  to={`/shopping/${sex}/${category}/${product.id}/${nameSlug}`}
                  key={index}
                >
                  <ProductCard data={product} />
                </Link>
              );
            })}
          </div>
        </InfiniteScroll>
      )}
      {fetchState === fetchStates.FETCHING && <Spinner />}
    </div>
  );
}

export default Shop;
