import { useHistory } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductCards({ data }) {
  const respProducts = data.products.slice(0, 6);
  const history = useHistory();

  return (
    <div className="ProductCards w-[80%] mx-auto py-[5rem] flex flex-col items-center sm:text-center">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h4 className="text-xl text-accent sm:hidden">{data.title1}</h4>
        <h3 className="text-2xl font-bold">{data.title2}</h3>
        <p className="text-sm text-accent">{data.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-6 sm:hidden">
        {data.products.map((card, index) => {
          return <ProductCard data={card} key={index} />;
        })}
      </div>
      <div className="desktop:hidden flex flex-col justify-center gap-8 p-6">
        {respProducts.map((card, index) => {
          return <ProductCard data={card} key={index} />;
        })}
      </div>
      <button
        className="mt-8 border rounded border-secondary text-secondary font-bold px-10 py-4"
        onClick={() => history.push("/productlist")}
      >
        {data.button}
      </button>
    </div>
  );
}

export default ProductCards;
