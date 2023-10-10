import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";

import "./App.css";

function App() {
  const language = "en";
  const data = useSelector((store) => store[language]);
  return (
    <div className="App text-primary overflow-hidden">
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route path="/about">
          <About data={data} />
        </Route>
        <Route path="/contact">
          <Contact data={data} />
        </Route>
        <Route path="/pricing">
          <Pricing data={data} />
        </Route>
        <Route path="/productlist">
          <ProductList data={data} />
        </Route>
        <Route path="/productlist/:productID">
          <Product data={data} />
        </Route>
        <Route path="/signup">
          <SignUp data={data} />
        </Route>
        <Route path="/team">
          <Team data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
