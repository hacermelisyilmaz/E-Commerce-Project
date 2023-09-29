function ProductCard({ data }) {
  return (
    <div className="ProductCard">
      <img src={data.img} />
      <div className="font-bold flex flex-col items-center gap-3 pt-6 pb-9">
        <h5>{data.header}</h5>
        <p className="text-sm leading-6 text-tertiary">{data.department}</p>
        <div className="flex gap-2">
          <span className="text-oldgray">{data.oldprice}</span>
          <span className="text-price">{data.newprice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
