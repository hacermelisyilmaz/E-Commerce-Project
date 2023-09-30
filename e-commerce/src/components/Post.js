import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChartBar,
  faChartLine,
  faClock,
  faDownload,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Post({ data }) {
  return (
    <div className="Post flex">
      <img src={data.img} />
      <div className="text-content p-6 pb-9 flex flex-col justify-between">
        <div className="first-line flex justify-between">
          <h6 className="text-sm font-bold text-secondary">{data.title1}</h6>
          <div className="flex items-center p-[5px] border rounded-[20px] bg-primary">
            <FontAwesomeIcon icon={faStar} className="text-star" />
            <p className="text-white">{data.rate}</p>
          </div>
        </div>
        <h5 className="font-bold">{data.title2}</h5>
        <p className="text-sm text-accent">{data.description}</p>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faDownload} />
          <span className="text-sm font-bold text-accent">{data.salesno}</span>
        </div>
        <div className="flex gap-2 font-bold">
          <span className="text-neutral">{data.oldsuccess}</span>
          <span className="text-success">{data.newsuccess}</span>
        </div>
        <img src={data.colors} className="w-1/3" />
        <div className="text-xs flex justify-between">
          <div>
            <FontAwesomeIcon icon={faClock} className="text-secondary" />
            <span className="text-accent ml-1">{data.hour}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faChartBar} className="text-warning" />
            <span className="text-accent ml-1">{data.lessons}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faChartLine} className="text-success" />
            <span className="text-accent ml-1">{data.progress}</span>
          </div>
        </div>
        <button className="text-secondary border rounded-[37px] border-secondary py-3 px-5 flex gap-3 justify-center items-center w-36">
          <span className="text-sm font-bold">{data.button}</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default Post;
