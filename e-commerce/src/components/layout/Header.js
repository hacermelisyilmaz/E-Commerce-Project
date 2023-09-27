import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCartShopping,
  faEnvelope,
  faHeart,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Header({ data }) {
  const infoData = data.info;
  const navData = data.nav;
  const rightData = navData.rightside;
  return (
    <div className="Header">
      <div className="header-info flex">
        <div className="phone flex">
          <FontAwesomeIcon icon={faPhone} />
          <p>{infoData.phone}</p>
        </div>
        <div className="email flex">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>{infoData.email}</p>
        </div>
        <p className="header-message">{infoData.message}</p>
        <div className="follow-us flex">
          <p>{infoData.socialmedia}</p>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} /* style={{color: "#ffffff",}} */ />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <div className="header-nav">
        <h1>{navData.brandname}</h1>
        <nav>
          <Link to="/">{navData.navlinks.home}</Link>
          <Link to="/">
            {navData.navlinks.shop}
            <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          <Link to="/">{navData.navlinks.aboout}</Link>
          <Link to="/">{navData.navlinks.blog}</Link>
          <Link to="/">{navData.navlinks.contact}</Link>
          <Link to="/">{navData.navlinks.pages}</Link>
        </nav>
        <div className="nav-right-side">
          <Link to="/">
            <FontAwesomeIcon icon={faUser} />
            <span>{rightData.login} </span>
            <span>/</span>
            <span>{rightData.registr} </span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
