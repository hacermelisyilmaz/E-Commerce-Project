import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/layout/Header.js";
import TeamCard from "../components/TeamCard.js";
import Footer from "../components/layout/Footer.js";
import Trial from "../components/layout/Trial.js";

function Team({ data }) {
  const team = data.team;
  const { section, title, people } = team;

  return (
    <div className="Team">
      <Header data={data} />

      <div>
        <div className="p-12 font-bold flex flex-col gap-4 items-center sm:text-center">
          <h5 className="text-base text-accent">{section.subtitle}</h5>
          <h1 className="text-[3.6rem] leading-[5rem] sm:text-4xl">
            {section.title}
          </h1>
          <nav className="text-sm flex items-center gap-4">
            <Link to="/">{section.history.prev}</Link>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-neutral text-base"
            />
            <Link to="/team" className="text-accent">
              {section.history.current}
            </Link>
          </nav>
        </div>
        <div className="flex flex-col flex-wrap gap-[10px] max-h-[34rem] sm:max-h-fit sm:flex-row sm:justify-center sm:gap-1">
          {section.images.map((img, index) => {
            return <img key={index} src={img} className="object-cover" />;
          })}
        </div>
      </div>

      <div className="mx-48 py-28 sm:mx-8">
        <h2 className="text-center text-[2.5rem] leading-[3rem] font-bold mb-28">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {people.map((person, index) => {
            return <TeamCard key={index} person={person} />;
          })}
        </div>
      </div>

      <Trial data={data.trial} />

      <Footer data={data} inner={true} />
    </div>
  );
}

export default Team;
