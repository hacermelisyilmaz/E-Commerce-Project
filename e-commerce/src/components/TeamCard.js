import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamCard({ person }) {
  return (
    <div className="TeamCard">
      <img src={person.img} />
      <div className="flex flex-col items-center gap-3 p-7 font-bold leading-6">
        <h5>{person.name}</h5>
        <p className="text-sm text-accent">{person.department}</p>
        <div className="text-2xl text-secondary flex gap-5">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
