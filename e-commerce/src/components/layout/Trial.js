import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Trial({ data }) {
  const { title, description, button } = data;
  return (
    <div className="Trial py-20 flex flex-col items-center gap-8 sm:text-center sm:px-8">
      <h2 className="text-[2.5rem] leading-[3rem] font-bold ">{title}</h2>
      <p className="text-sm text-accent w-1/4 text-center sm:w-full">
        {description}
      </p>
      <button className="text-sm text-white font-bold border-0 border-solid rounded py-4 px-10 bg-secondary w-fit">
        {button}
      </button>
      <div className="text-3xl flex gap-8">
        <FontAwesomeIcon icon={faTwitter} style={{ color: "#55acee" }} />
        <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#395185" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000" }} />
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0a66c0" }} />
      </div>
    </div>
  );
}

export default Trial;
