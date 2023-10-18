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
  //const language = useSelector(store => store.global.language);
  const data = useSelector((store) => store.data[language]);
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
