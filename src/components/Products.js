import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";
import fetchStates from "../store/fetchStates";
import { Spinner } from "flowbite-react";

function Products({ data }) {
  const { productList, fetchState } = data;

  if (fetchState === fetchStates.FETCH_FAILED) {
    toast.error("Fetch failed. Try again");
    return <div className="Products"></div>;
  } else if (fetchState === fetchStates.FETCHED) {
    return (
      <div className="Products flex flex-wrap justify-center gap-7 w-3/4 mx-auto sm:flex-col sm:items-center sm:gap-4">
        {productList.map((card) => {
          return <ProductCard data={card} key={card.id} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="Products flex justify-center">
        <Spinner />
      </div>
    );
  }
}

export default Products;
