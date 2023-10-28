import {
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./ProductCard";

function Shop({ data }) {
  const clickHandler = (e) => {
    e.target.classList.add("bg-secondary");
    e.target.classList.add("text-white");
  };

  return (
    <div className="Shop">
      <div className="w-3/4 mx-auto py-6 flex justify-between items-center sm:flex-col sm:items-center sm:gap-6">
        <p>{data.resultno}</p>
        <div className="flex gap-2 items-center">
          <p>{data.views}</p>
          <div className="border rounded-md p-4">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </div>
          <div className="border border-info rounded-md p-4">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
        </div>
        <input
          placeholder="Search"
          className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
        />
        <div className="flex gap-3">
          <select
            id="filter"
            name="filter"
            title="filter"
            className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
          >
            <option value={data.fopt1}>{data.fopt1}</option>
          </select>
          <button className="text-white bg-secondary border-0 border-solid rounded-[5px] py-3 px-5">
            {data.button}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-3/4 mx-auto sm:justify-center sm:gap-4">
        {data.products.map((card, index) => {
          return <ProductCard data={card} key={index} />;
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
