import Categories from "../components/layout/Categories";
import Clients from "../components/layout/Clients";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Shop from "../components/layout/Shop";

function ProductList({ data }) {
  return (
    <div className="ProductList">
      <Header data={data.hero.header} />
      <Categories data={data.categories} />
      <Shop data={data.shop} />
      <Clients data={data.clients} />
      <Footer data={data.footer} />
    </div>
  );
}

export default ProductList;
