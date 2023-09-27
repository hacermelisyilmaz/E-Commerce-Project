import Hero from "../components/layout/Hero";

function Home({ data }) {
  return (
    <div className="Home">
      <Hero data={data.hero} />
    </div>
  );
}

export default Home;
