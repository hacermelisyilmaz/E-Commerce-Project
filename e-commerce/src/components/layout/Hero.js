import Header from "./Header";

function Hero({ data }) {
  return (
    <div className="Hero">
      <Header data={data.header} />
    </div>
  );
}

export default Hero;
