import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";

function Products({ data }) {
  const { productList, error } = data;

  if (error) {
    toast.error("Fetch failed. Try again");
  }

  if (error) {
    return <div className="Products"></div>;
  } else if (productList.length) {
    return (
      <div className="Products flex flex-wrap justify-center gap-7 w-3/4 mx-auto sm:flex-col sm:items-center sm:gap-4">
        {productList.map((card) => {
          return <ProductCard data={card} key={card.id} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="Products">
        <Spinner />
      </div>
    );
  }
}

export default Products;
