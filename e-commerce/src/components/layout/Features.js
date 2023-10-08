import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBookOpen,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";

function Features({ data }) {
  return (
    <div className="Features py-[5rem] w-[75%] mx-auto sm:text-center">
      <div className="flex flex-col gap-3 items-center sm:pb-20">
        <h3 className="text-xl text-accent">{data.title1}</h3>
        <h2 className="text-2xl font-bold">{data.title2}</h2>
        <p className="text-sm text-accent">{data.description}</p>
      </div>
      <div className="flex justify-center gap-11 sm:flex-col sm:items-center">
        {data.cards.map((card, index) => {
          return (
            <div
              className="w-1/4 px-10 py-9 flex flex-col items-center gap-5 sm:w-full"
              key={index}
            >
              {index === 0 && (
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="text-7xl text-secondary"
                />
              )}
              {index === 1 && (
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-7xl text-secondary"
                />
              )}
              {index === 2 && (
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-7xl text-secondary"
                />
              )}
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="text-sm text-center">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
