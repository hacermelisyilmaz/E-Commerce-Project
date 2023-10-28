import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
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
import MD5 from "crypto-js/md5";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ data }) {
  const infoData = data.hero.header.info;
  const navData = data.hero.header.nav;
  const rightData = navData.rightside;

  const user = useSelector((store) => store.user.user);
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="Header font-bold">
      <div className="header-info bg-primary text-white font-bold flex justify-between items-center py-4 px-6 sm:hidden">
        <div className="contact flex gap-[1.8rem]">
          <div className="phone flex items-center gap-[0.2rem]">
            <FontAwesomeIcon icon={faPhone} />
            <p>{infoData.phone}</p>
          </div>
          <div className="email flex items-center gap-[0.2rem]">
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
      <div className="header-nav flex justify-between items-center py-4 px-6 sm:flex-col">
        <div className="w-fit flex justify-between sm:w-full">
          <h1
            className="text-2xl"
            onClick={() => {
              history.push("/");
            }}
          >
            {data.brand}
          </h1>
          <div className="hidden sm:flex sm:items-center sm:gap-6">
            {location.pathname === "/shopping" || (
              <Link to="/">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            )}
            {location.pathname === "/shopping" || (
              <Link to="/">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            )}
            <Link to="/">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-[85%] sm:pt-20 sm:justify-center sm:flex-col sm:gap-[1.3rem]">
          <nav className="text-accent flex items-center gap-[1.3rem] sm:flex-col sm:items-center sm:text-3xl">
            <Link to="/">{navData.navlinks.home}</Link>
            <Link
              className="flex items-center gap-1 text-primary font-medium sm:hidden"
              to="/shopping"
            >
              {navData.navlinks.shop}
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <Link to="/about">{navData.navlinks.about}</Link>
            <Link to="/pricing">{navData.navlinks.pricing}</Link>
            <Link to="/contact">{navData.navlinks.contact}</Link>
            <Link to="/team">{navData.navlinks.team}</Link>
          </nav>
          <div
            className={
              location.pathname === "/shopping"
                ? "nav-right-side text-secondary flex gap-[1rem] items-center sm:flex-col sm:text-3xl sm:items-center sm:gap-[1.3rem]"
                : "nav-right-side text-secondary flex gap-[1rem] items-center sm:hidden"
            }
          >
            {Object.keys(user).length ? (
              <div className="flex items-center gap-3">
                <img
                  src={`https://www.gravatar.com/avatar/${MD5(
                    user.email
                  )}?s=24`}
                  className="border-2 border-solid border-secondary-content rounded-[50%]"
                />
                <p>{user.name}</p>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faUser} />
                <span
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  {rightData.login}
                </span>
                <span> / </span>
                <span
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  {rightData.registr}
                </span>
              </div>
            )}

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
