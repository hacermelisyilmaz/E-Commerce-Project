import MD5 from "crypto-js/md5";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../store/actions/shoppingCartActions";

function Header() {
  const user = useSelector((store) => store.user.user);
  const categories = useSelector(
    (store) => store.product.categories.categoryList
  );
  const { cart } = useSelector((store) => store.shopping);
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
            <p>(225) 555-0118</p>
          </div>
          <div className="email flex items-center gap-[0.2rem]">
            <i className="fa-solid fa-envelope"></i>
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        <p className="header-message">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="follow-us flex gap-4">
          <p>Follow Us:</p>
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
            Bandage
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
            <Link to="/">Home</Link>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0}>
                <Link
                  className="flex items-center gap-1 sm:hidden"
                  to="/shopping"
                >
                  Shop
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
              </label>
              <div tabIndex={0} className="dropdown-content z-[1] menu">
                <div className="p-4 shadow-xl bg-info rounded-box w-fit flex gap-4">
                  <ul>
                    <li className="text-black">Women</li>
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
                    <li className="text-black">Men</li>
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
            </div>

            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/team">Team</Link>
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
                  Login
                </span>
                <span> / </span>
                <span
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Register
                </span>
              </div>
            )}

            <Link to="/">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0}>
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </label>

              <div
                tabIndex={0}
                className="dropdown-content min-w-[20rem] z-[1] right-[1px] menu p-4 shadow-xl bg-info rounded-box"
              >
                <ul className="w-fit">
                  <h2 className="text-black">{`My Cart (${cart.reduce(
                    (sum, product) => {
                      return sum + product.count;
                    },
                    0
                  )} Products)`}</h2>
                  {cart.map((item, index) => {
                    const { product, count } = item;
                    return (
                      <li key={index}>
                        <div className="flex gap-4 justify-between">
                          <div className="flex gap-4 h-fit">
                            {/*  <img
                              src={product.images[0].url}
                              className="h-16 object-cover"
                            /> */}

                            <div className="flex flex-col text-primary">
                              <h3>{product.name}</h3>
                              <p className="font-normal">Amount: {count}</p>
                              <p className="text-success">
                                {product.price * count} ₺
                              </p>
                            </div>
                          </div>
                          {/*  <i
                            class="fa-solid fa-trash-can text-error"
                            onClick={() => {
                              removeFromCart(product.id);
                            }}
                          ></i> */}
                        </div>
                        <hr />
                      </li>
                    );
                  })}
                  {cart.length ? (
                    <div className="flex gap-2 justify-between">
                      <Link to="/cart">
                        <button className="border border-secondary rounded-md py-2 px-4">
                          Go to Basket
                        </button>
                      </Link>
                      <button className="border border-secondary rounded-md py-2 px-4 bg-secondary text-white">
                        Confirm Order
                      </button>
                    </div>
                  ) : (
                    <p className="pt-3 text-primary font-normal">
                      Your basket is empty.
                    </p>
                  )}
                </ul>
              </div>
            </div>
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
