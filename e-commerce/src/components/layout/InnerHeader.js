import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function InnerHeader({ data }) {
  const header = data.innerheader;
  return (
    <header className="InnerHeader py-4 w-[73%] mx-auto flex justify-between font-bold sm:w-full sm:px-8">
      <div className="flex justify-between gap-10 sm:flex-col sm:w-full">
        <div className="sm:flex sm:justify-between">
          <h1 className="text-2xl py-3 pr-20 sm:pr-0">{data.brand}</h1>
          <div className="hidden sm:flex sm:items-center sm:gap-6">
            <Link to="/">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
        </div>
        <nav className="flex gap-5 py-4 text-sm leading-6 text-accent sm:flex-col sm:items-center sm:text-3xl sm:font-normal">
          <Link to="/">{header.nav[0]}</Link>
          <Link to="/team">{header.nav[1]}</Link>
          <Link to="/pricing">{header.nav[2]}</Link>
          <Link to="/contact">{header.nav[3]}</Link>
        </nav>
      </div>
      <div className="flex gap-11 sm:hidden">
        <button className="text-secondary">{header.login}</button>
        <button className="border-0 border-solid rounded py-4 px-6 flex items-center gap-4 bg-secondary text-white">
          {header.signup}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </header>
  );
}

export default InnerHeader;
