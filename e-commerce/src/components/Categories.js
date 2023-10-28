import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../store/actions/productActions";
import { Link } from "react-router-dom";

function Categories({ data }) {
  const dispatch = useDispatch();
  const categories = useSelector(
    (store) => store.product.categories.categoryList
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="Categories bg-info">
      <div className="py-6 w-[73%] mx-auto flex justify-between sm:flex-col sm:items-center sm:gap-7">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <div className="flex gap-4 font-bold py-2">
          <p>{data.prev}</p>
          <FontAwesomeIcon icon={faAngleRight} className="text-neutral" />
          <p className="text-neutral">{data.title}</p>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex justify-center flex-wrap gap-4 pb-12 sm:flex-col sm:items-center">
        {categories.slice(0, 5).map((cat) => {
          return (
            <Link
              className="CategoryCard relative max-h-56 max-w-[18%] overflow-hidden sm:max-w-full sm:max-h-full sm:aspect-square"
              key={cat.id}
              to={`/shopping/${cat.code.slice(2)}`}
            >
              <img src={cat.img} className="object-cover h-full w-full" />
              <div className="CategoryCardFilter bg-[#21212140] w-full h-full absolute top-0 right-0"></div>
              <div className="w-full h-full absolute top-0 right-0 text-white flex flex-col justify-center items-center gap-2">
                <h6 className="font-bold">{cat.title}</h6>
                <p>ITEM NO</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
