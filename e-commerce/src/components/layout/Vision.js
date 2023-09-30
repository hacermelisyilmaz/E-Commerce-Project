function Vision({ data }) {
  return (
    <div className="Vision py-[5rem] w-[80%] mx-auto flex">
      <div className="images flex gap-4">
        <img src={data.img1} />
        <img src={data.img2} />
      </div>
      <div className="text-content w-1/2 flex flex-col justify-center gap-4 pl-[5.6rem]">
        <h5 className="font-bold text-secondary">{data.title1}</h5>
        <h2 className="text-[2.5rem] font-bold">{data.title2}</h2>
        <div className="w-[70%] text-sm text-accent flex flex-col gap-5">
          <p className="text-sm">{data.description1}</p>
          <p className="text-sm">{data.description2}</p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
