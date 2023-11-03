import { useHistory } from "react-router-dom";

function ProductCard({ data }) {
  const history = useHistory();
  return (
    <div
      className="ProductCard w-[15rem]"
      onClick={() => history.push(`/shopping/${data.id}`)}
    >
      <img
        src={data.images.length ? data.images[0] : ""}
        className="w-full h-[18.75rem] object-cover sm:w-full sm:h-[26.7rem]"
      />
      <div className="font-bold flex flex-col items-center gap-3 pt-6 pb-9 text-center">
        <h5>{data.name}</h5>
        <p className="text-sm leading-6 text-accent">{data.description}</p>
        <div className="flex gap-2">
          <span className="text-neutral"></span>
          <span className="text-success">{data.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
