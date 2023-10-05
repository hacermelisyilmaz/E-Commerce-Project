import Clients from "../components/layout/Clients";
import Features from "../components/layout/Features";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Posts from "../components/layout/Posts";
import ProductCards from "../components/layout/ProductCards";
import ShopCards from "../components/layout/ShopCards";
import Vision from "../components/layout/Vision";

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
