import MD5 from "crypto-js/md5";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ data }) {
  const infoData = data.hero.header.info;
  const navData = data.hero.header.nav;
  const dropdownData = data.hero.header.shopdropdown;
  const rightData = navData.rightside;

  const user = useSelector((store) => store.user.user);
  const categories = useSelector(
    (store) => store.product.categories.categoryList
  );
  const { pathname, search } = useLocation();
  const history = useHistory();

  const womanCat = categories.filter((cat) => cat.gender === "k");
  const manCat = categories.filter((cat) => cat.gender === "e");

  return (
    <div className="Header font-bold">
      <div className="header-info bg-primary text-white font-bold flex justify-between items-center py-4 px-6 sm:hidden">
        <div className="contact flex gap-[1.8rem]">
          <div className="phone flex items-center gap-[0.2rem]">
            <i className="fa-solid fa-phone"></i>
            <p>{infoData.phone}</p>
          </div>
          <div className="email flex items-center gap-[0.2rem]">
            <i className="fa-solid fa-envelope"></i>
            <p>{infoData.email}</p>
          </div>
        </div>

        <p className="header-message">{infoData.message}</p>

        <div className="follow-us flex gap-4">
          <p>{infoData.socialmedia}</p>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
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
            {pathname === "/shopping" || (
              <Link to="/">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            )}
            {pathname === "/shopping" || (
              <Link to="/">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            )}
            <Link to="/">
              <i className="fa-solid fa-bars"></i>
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-[85%] sm:pt-20 sm:justify-center sm:flex-col sm:gap-[1.3rem]">
          <nav className="text-accent flex items-center gap-[1.3rem] sm:flex-col sm:items-center sm:text-3xl">
            <Link to="/">{navData.navlinks.home}</Link>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0}>
                <Link
                  className="flex items-center gap-1 sm:hidden"
                  to="/shopping"
                >
                  {navData.navlinks.shop}
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-4 shadow-xl bg-info rounded-box w-52 flex gap-4"
              >
                <ul>
                  <li className="text-black">{dropdownData.header1}</li>
                  {womanCat.map((cat, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`/shopping/${cat.code.slice(
                            0,
                            1
                          )}-${cat.code.slice(2)}${search}`}
                        >
                          {cat.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  <li className="text-black">{dropdownData.header2}</li>
                  {manCat.map((cat, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/shopping/${cat.code.slice(2)}`}>
                          {cat.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <Link to="/about">{navData.navlinks.about}</Link>
            <Link to="/pricing">{navData.navlinks.pricing}</Link>
            <Link to="/contact">{navData.navlinks.contact}</Link>
            <Link to="/team">{navData.navlinks.team}</Link>
          </nav>
          <div
            className={
              pathname === "/shopping"
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
                <i className="fa-solid fa-user"></i>
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
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to="/">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to="/">
              <i className="fa-regular fa-heart"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
