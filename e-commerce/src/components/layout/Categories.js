import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Categories({ data }) {
  return (
    <div className="Categories bg-info">
      <div className="py-6 w-[73%] mx-auto flex justify-between sm:flex-col sm:items-center sm:gap-7">
        <h2 className="text-2xl font-bold">Shop</h2>
        <div className="flex gap-4 font-bold py-2">
          <p>Home</p>
          <FontAwesomeIcon icon={faAngleRight} className="text-neutral" />
          <p className="text-neutral">Shop</p>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex justify-center gap-4 pb-12 sm:flex-col">
        {data.map((cat, index) => {
          return (
            <div
              className="category bg-cover min-w-[205px] min-h-[223px] text-white flex flex-col justify-center items-center gap-2"
              key={index}
            >
              <h6 className="font-bold">{cat.name}</h6>
              <p>{cat.noitems}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
