import Categories from "../components/Categories";
import Clients from "../components/layout/Clients";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Shop from "../components/Shop";

function ProductList({ data }) {
  return (
    <div className="ProductList">
      <Header data={data} />
      <Categories data={data.categories} />
      <Shop data={data.shop} />
      <Clients data={data.clients} />
      <Footer data={data} />
    </div>
  );
}

export default ProductList;
