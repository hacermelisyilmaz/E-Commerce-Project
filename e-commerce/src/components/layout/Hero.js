import BannerSlide from "../BannerSlide";
import Header from "./Header";

function Hero({ data }) {
  return (
    <div className="Hero">
      <Header data={data.header} />
      <BannerSlide data={data.carousel} />
    </div>
  );
}

export default Hero;
