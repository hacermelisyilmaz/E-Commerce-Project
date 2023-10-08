function ShopCards({ data }) {
  return (
    <div className="ShopCards py-[5rem]">
      <div className="w-full h-[36rem] flex flex-col flex-wrap items-center content-center gap-[1.4rem] sm:h-fit sm:px-5">
        {data.cards.map((card, index) => {
          return (
            <div key={index} className="relative">
              <img src={card.img} />
              <div className="font-bold text-white bg-[#23a5f0c4] flex flex-col gap-5 absolute left-0 bottom-0 h-fit w-fit pl-[10%] pr-[25%] pt-[10%] pb-[7%]">
                <h4>{card.message}</h4>
                <button className="border border-solid rounded-md border-white py-4 px-10">
                  {card.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopCards;
