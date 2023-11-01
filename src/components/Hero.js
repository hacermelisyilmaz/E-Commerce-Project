import BannerSlide from "./BannerSlide";
import Header from "./layout/Header";

function Hero({ data }) {
  return (
    <div className="Hero">
      <Header data={data} />
      <BannerSlide data={data.hero.carousel} />
    </div>
  );
}

export default Hero;
