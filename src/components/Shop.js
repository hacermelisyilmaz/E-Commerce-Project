import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { setProductList } from "../store/actions/productActions";
import useQueryParams from "../hooks/useQueryParams";
import { useParams } from "react-router-dom";
import fetchStates from "../store/fetchStates";
import Spinner from "../components/Spinner";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

function Shop({ data }) {
  const infScrollingParams = {
    limit: 36,
    offset: 36,
  };

  const products = useSelector((store) => store.product.products);
  const categories = useSelector(
    (store) => store.product.categories.categoryList
  );
  const { totalProductCount, fetchState, productList } = products;

  const dispatch = useDispatch();
  const { category } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [loadMore, setLoadMore] = useState(true);
  const [filterParams, setFilterParams] = useState({
    filter: "",
    sort: "",
  });
  const [concProducts, setConcProducts] = useState([]);
  const [queryParams, setQueryParams] = useQueryParams();

  const submitHandler = (e) => {
    e.preventDefault();
    setQueryParams(filterParams);
  };

  const nextInfScroll = () => {
    dispatch(
      setProductList({
        ...queryParams,
        limit: infScrollingParams.limit,
        offset: infScrollingParams.offset,
      })
    );
    setLoadMore(!loadMore);
    if (
      totalProductCount &&
      productList.length + infScrollingParams.offset > totalProductCount
    ) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    const categoryId = categories.find(
      (c) => c.code == `${category?.slice(0, 1)}:${category?.slice(2)}`
    )?.id;
    dispatch(
      setProductList({
        ...queryParams,
        ...infScrollingParams,
        category: categoryId,
      })
    );
    if (fetchState === fetchStates.FETCH_FAILED)
      toast.error("Products failed to load. Please try again later.");
  }, [queryParams, category]);

  useEffect(() => {
    setConcProducts(productList);
  }, [productList]);

  useEffect(() => {
    setConcProducts(concProducts.concat(productList));
  }, [loadMore]);

  return (
    <div className="Shop">
      <form
        className="w-3/4 mx-auto py-6 flex justify-between items-center sm:flex-col sm:items-center sm:gap-6"
        onSubmit={submitHandler}
      >
        <p>
          {"Showing " +
            concProducts.length +
            " of all " +
            totalProductCount +
            " results"}
        </p>
        <div className="flex gap-2 items-center">
          <p>{data.views}</p>
          <div className="border rounded-md p-2">
            <i class="fa-solid fa-table-cells-large"></i>
          </div>
          <div className="border border-info rounded-md p-2">
            <i class="fa-solid fa-list-check"></i>
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
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="Products flex flex-wrap justify-center gap-7 w-3/4 mx-auto sm:flex-col sm:items-center sm:gap-4">
            {concProducts.map((card, index) => {
              return <ProductCard data={card} key={index} />;
            })}
          </div>
        </InfiniteScroll>
      )}
      {fetchState === fetchStates.FETCHING && <Spinner />}
    </div>
  );
}

export default Shop;
