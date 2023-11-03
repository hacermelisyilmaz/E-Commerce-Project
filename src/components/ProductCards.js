import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProductList } from "../store/actions/productActions";
import Products from "./Products";

function ProductCards({ data }) {
  const products = useSelector((store) => store.product.products);
  const slicedProducts = {
    ...products,
    productList: products.productList
      .sort((a, b) => b.sell_count - a.sell_count)
      .slice(0, 8),
  };
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProductList({
        category: "",
        filter: "",
        sort: "",
      })
    );
  }, []);

  return (
    <div className="ProductCards w-[80%] mx-auto py-[5rem] flex flex-col items-center sm:text-center">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h4 className="text-xl text-accent sm:hidden">{data.title1}</h4>
        <h3 className="text-2xl font-bold">{data.title2}</h3>
        <p className="text-sm text-accent">{data.description}</p>
      </div>

      <Products data={slicedProducts} />

      <button
        className="mt-8 border rounded border-secondary text-secondary font-bold px-10 py-4"
        onClick={() => history.push("/shopping")}
      >
        {data.button}
      </button>
    </div>
  );
}

export default ProductCards;
