import {
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../ProductCard";
function Shop({ data }) {
  return (
    <div className="Shop">
      <div className="w-3/4 mx-auto py-6 flex justify-between items-center">
        <p>{data.resultno}</p>
        <div className="flex gap-2 items-center">
          <p>{data.views}</p>
          <div className="border rounded-md p-4">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </div>
          <div className="border border-lightgray rounded-md p-4">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
        </div>
        <div className="flex gap-3">
          <select id="filter" name="filter" className="bg-lightgray">
            <option value={data.fopt1}>{data.fopt1}</option>
          </select>
          <button className="text-white bg-secondary py-3 px-5">
            {data.button}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-3/4 mx-auto">
        {data.products.map((card, index) => {
          return <ProductCard data={card} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
