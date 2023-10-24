function ShopCards({ data }) {
  const { cards } = data;

  return (
    <div className="ShopCards py-[5rem]">
      <div className="w-full h-[36rem] flex justify-center gap-[1.4rem] sm:h-fit sm:px-5 sm:flex-col">
        <div className="relative">
          <img src={cards[0].img} className="object-cover" />
          <div className="font-bold text-white bg-[#23a5f0c4] flex flex-col gap-5 absolute left-0 bottom-0 h-fit w-fit pl-[10%] pr-[25%] pt-[10%] pb-[7%] sm:w-full">
            <h4 className="text-2xl">{cards[0].message}</h4>
            <button className="border border-solid rounded-md border-white py-4 px-10 text-sm">
              {cards[0].button}
            </button>
          </div>
        </div>

        <div className="flex flex-col h-full justify-between sm:gap-[1.4rem]">
          <div className="relative h-[48%] overflow-hidden sm:h-fit">
            <img src={cards[1].img} className="object-cover w-full" />
            <div className="font-bold text-white bg-[#23a5f0c4] flex flex-col gap-5 absolute left-0 bottom-0 h-fit w-fit pl-[10%] pr-[25%] pt-[10%] pb-[7%] sm:w-full">
              <h4 className="text-2xl">{cards[1].message}</h4>
              <button className="border border-solid rounded-md border-white py-4 px-10 text-sm">
                {cards[1].button}
              </button>
            </div>
          </div>

          <div className="relative h-[48%] overflow-hidden sm:h-fit">
            <img src={cards[2].img} className="object-cover w-full" />
            <div className="font-bold text-white bg-[#23a5f0c4] flex flex-col gap-5 absolute left-0 bottom-0 h-fit w-fit pl-[10%] pr-[25%] pt-[10%] pb-[7%] sm:w-full">
              <h4 className="text-2xl">{cards[2].message}</h4>
              <button className="border border-solid rounded-md border-white py-4 px-10 text-sm">
                {cards[2].button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
