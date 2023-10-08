function ShopCards({ data }) {
  return (
    <div className="ShopCards py-[5rem]">
      <div className="w-full h-[36rem] flex flex-col flex-wrap items-center content-center gap-[1.4rem] sm:h-fit sm:px-5">
        <img src={data.images[0]} />
        <img src={data.images[1]} />
        <img src={data.images[2]} />
      </div>
    </div>
  );
}

export default ShopCards;
