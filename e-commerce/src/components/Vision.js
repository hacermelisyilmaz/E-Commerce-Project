function Vision({ data }) {
  return (
    <div className="Vision py-[5rem] w-[80%] mx-auto flex sm:flex-col-reverse sm:w-full sm:px-4 sm:gap-12">
      <div className="flex gap-4 sm:w-full sm:justify-between">
        <div className="flex-auto">
          <img src={data.img1} />
        </div>
        <div className="flex-auto">
          <img src={data.img2} />
        </div>
      </div>
      <div className="text-content w-1/2 flex flex-col justify-center gap-4 pl-[5.6rem] sm:px-12 sm:w-fit">
        <h5 className="font-bold text-secondary">{data.title1}</h5>
        <h2 className="text-[2.5rem] font-bold">{data.title2}</h2>
        <div className="w-[70%] text-sm text-accent flex flex-col gap-5 sm:w-fit">
          <p className="text-sm">{data.description1}</p>
          <p className="text-sm">{data.description2}</p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
