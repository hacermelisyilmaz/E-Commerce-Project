import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function InnerHeader({ data }) {
  const header = data.innerheader;
  return (
    <header className="InnerHeader py-4 w-[73%] mx-auto flex justify-between font-bold">
      <div className="flex justify-between gap-10">
        <h1 className="text-2xl py-3 pr-20">{data.brand}</h1>
        <nav className="flex gap-5 py-4 text-sm leading-6 text-accent">
          <Link to="/">{header.nav[0]}</Link>
          <Link to="/team">{header.nav[1]}</Link>
          <Link to="/pricing">{header.nav[2]}</Link>
          <Link to="/contact">{header.nav[3]}</Link>
        </nav>
      </div>
      <div className="flex gap-11">
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
