import Clients from "../components/layout/Clients";
import Features from "../components/Features";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import ProductCards from "../components/ProductCards";
import ShopCards from "../components/ShopCards";
import Vision from "../components/Vision";

function Home({ data }) {
  return (
    <div className="Home">
      <Hero data={data} />
      <Clients data={data.clients} />
      <ShopCards data={data.shopcards} />
      <ProductCards data={data.productcards} />
      <Vision data={data.vision} />
      <Features data={data.features} />
      <Posts data={data.posts} />
      <Footer data={data} inner={false} />
    </div>
  );
}

export default Home;
