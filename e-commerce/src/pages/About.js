import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About({ data }) {
  return (
    <div className="About h-screen">
      <div className="h-full w-[45%] mx-auto text-center flex flex-col justify-center items-center gap-8">
        <h2 className="text-primary font-bold text-[2.5rem] leading-[3.125rem]">
          {data.about.title}
        </h2>
        <p className="text-accent text-xl">{data.about.description}</p>
        <button className="bg-secondary text-white font-bold text-sm border rounded-md py-4 px-10">
          {data.about.button}
        </button>
        <div className="text-neutral text-3xl flex gap-9">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
}

export default About;
