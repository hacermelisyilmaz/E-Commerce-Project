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
  const infoData = data.hero.header.info;
  const navData = data.hero.header.nav;
  const rightData = navData.rightside;

  return (
    <div className="Header font-bold">
      <div className="header-info bg-primary text-white font-bold flex justify-between items-center py-4 px-6">
        <div className="contact flex gap-[1.8rem]">
          <div className="phone flex gap-[0.2rem]">
            <FontAwesomeIcon icon={faPhone} />
            <p>{infoData.phone}</p>
          </div>
          <div className="email flex gap-[0.2rem]">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{infoData.email}</p>
          </div>
        </div>

        <p className="header-message">{infoData.message}</p>

        <div className="follow-us flex gap-4">
          <p>{infoData.socialmedia}</p>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <div className="header-nav flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl">{data.brand}</h1>
        <div className="flex justify-between w-[85%] ">
          <nav className="text-accent flex gap-[1.3rem]">
            <Link to="/">{navData.navlinks.home}</Link>
            <Link className="text-primary font-medium" to="/">
              {navData.navlinks.shop}
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <Link to="/about">{navData.navlinks.about}</Link>
            <Link to="/pricing">{navData.navlinks.pricing}</Link>
            <Link to="/contact">{navData.navlinks.contact}</Link>
            <Link to="/team">{navData.navlinks.team}</Link>
          </nav>
          <div className="nav-right-side text-secondary flex gap-[1rem]">
            <Link to="/">
              <FontAwesomeIcon icon={faUser} />
              <span>{rightData.login}</span>
              <span> / </span>
              <span>{rightData.registr}</span>
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
    </div>
  );
}

export default Header;
