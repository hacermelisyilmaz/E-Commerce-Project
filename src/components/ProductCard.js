function ProductCard({ data }) {
  return (
    <div className="ProductCard">
      <img
        src={data.img}
        className="w-[15rem] h-[18.75rem] object-cover sm:w-full sm:h-[26.7rem]"
      />
      <div className="font-bold flex flex-col items-center gap-3 pt-6 pb-9">
        <h5>{data.title}</h5>
        <p className="text-sm leading-6 text-accent">English Department</p>
        <div className="flex gap-2">
          <span className="text-neutral">$16.48</span>
          <span className="text-success">$6.48</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
