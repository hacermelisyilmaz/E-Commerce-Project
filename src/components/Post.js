function Post({ data }) {
  return (
    <div className="Post flex sm:flex-col sm:shadow-md">
      <img
        src={data.img}
        className="sm:aspect-square sm:w-full sm:align-bottom"
      />
      <div className="text-content p-6 pb-9 flex flex-col justify-between sm:gap-2">
        <div className="first-line flex justify-between">
          <h6 className="text-sm font-bold text-secondary">{data.title1}</h6>
          <div className="flex items-center p-[5px] border rounded-[20px] bg-primary">
            <i className="fa-solid fa-star text-warning-content"></i>
            <p className="text-white">{data.rate}</p>
          </div>
        </div>
        <h5 className="font-bold">{data.title2}</h5>
        <p className="text-sm text-accent">{data.description}</p>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-download"></i>
          <span className="text-sm font-bold text-accent">{data.salesno}</span>
        </div>
        <div className="flex gap-2 font-bold">
          <span className="text-neutral">{data.oldsuccess}</span>
          <span className="text-success">{data.newsuccess}</span>
        </div>
        <img src={data.colors} className="w-1/3" />
        <div className="text-xs flex justify-between">
          <div>
            <i className="fa-regular fa-clock text-secondary"></i>
            <span className="text-accent ml-1">{data.hour}</span>
          </div>
          <div>
            <i className="fa-regular fa-chart-bar text-warning"></i>
            <span className="text-accent ml-1">{data.lessons}</span>
          </div>
          <div>
            <i className="fa-solid fa-chart-line text-success"></i>
            <span className="text-accent ml-1">{data.progress}</span>
          </div>
        </div>
        <button className="text-secondary border rounded-[37px] border-secondary py-3 px-5 flex gap-3 justify-center items-center w-fit sm:border-none sm:px-0">
          <span className="text-sm font-bold sm:text-primary">
            {data.button}
          </span>
          <i className="fa-solid fa-angle-right text-lg"></i>
        </button>
      </div>
    </div>
  );
}

export default Post;
