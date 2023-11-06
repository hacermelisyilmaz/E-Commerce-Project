import { Link } from "react-router-dom";

function Footer({ data, inner }) {
  const footer = data.footer;
  return (
    <div className="Footer">
      <div className={inner ? "" : "bg-info"}>
        <div className="w-[70%] m-auto py-10 flex justify-between sm:flex-col sm:gap-4">
          <h1 className="text-2xl font-bold">{data.brand}</h1>
          <div className="text-secondary flex gap-5 sm:text-2xl">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>{" "}
          </div>
        </div>
        <div className="w-[70%] m-auto">{inner && <hr />}</div>
      </div>
      <div className="w-[70%] m-auto py-12 flex justify-between sm:flex-col sm:gap-10">
        {footer.navcontainer.map((nav, index) => {
          return (
            <div className="font-bold flex flex-col gap-5" key={index}>
              <h5>{nav.title}</h5>
              <nav className="flex flex-col gap-3 text-accent sm:text-sm">
                <Link to={nav.nav1.link}>{nav.nav1.title}</Link>
                <Link to={nav.nav2.link}>{nav.nav2.title}</Link>
                <Link to={nav.nav3.link}>{nav.nav3.title}</Link>
                <Link to={nav.nav4.link}>{nav.nav4.title}</Link>
              </nav>
            </div>
          );
        })}
        <div>
          <h5 className="font-bold mb-5">{footer.contact.title}</h5>
          <div className="flex flex-wrap border-0 border-solid rounded-[5px] overflow-hidden">
            <input
              type="email"
              placeholder={footer.contact.placeholder}
              className="bg-info text-sm leading-7 flex-1 py-4 pl-5"
            />
            <button
              type="submit"
              className="text-sm text-white bg-secondary flex-1 py-4 px-3"
            >
              {footer.contact.button}
            </button>
          </div>
          <p className="text-xs leading-7">{footer.contact.caption}</p>
        </div>
      </div>
      <div className="py-6 bg-info">
        <div className="w-[70%] m-auto font-bold sm:text-accent sm:text-sm sm:text-center sm:w-1/2">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
