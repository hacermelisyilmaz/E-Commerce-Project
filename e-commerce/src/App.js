import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import "./App.css";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  const language = "en";
  const data = useSelector((store) => store[language]);
  return (
    <div className="App text-primary">
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route exact path="/about">
          <About data={data} />
        </Route>
        <Route exact path="/contact">
          <Contact data={data} />
        </Route>
        <Route exact path="/pricing">
          <Pricing data={data} />
        </Route>
        <Route exact path="/productlist">
          <ProductList data={data} />
        </Route>
        <Route exact path="/productlist/:productID">
          <Product data={data} />
        </Route>
        <Route exact path="/team">
          <Team data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
