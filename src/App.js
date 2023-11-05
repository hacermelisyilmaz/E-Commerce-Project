import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import useLocalStorage from "./hooks/useLocalStorage";
import axiosWithAuth from "./api/axiosWithAuth";
import { setUserSuccess } from "./store/actions/userActions";

import "./App.css";
import { fetchCategories } from "./store/actions/productActions";

function App() {
  const language = "en";
  //const language = useSelector(store => store.global.language);
  const data = useSelector((store) => store.data[language]);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const [token, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    if (token) {
      axiosWithAuth()
        .get("/verify")
        .then((response) => {
          dispatch(setUserSuccess(response.data));
          user.length && setToken(user.token);
        })
        .catch((error) => {
          localStorage.removeItem("token");
        });
    }
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="App min-h-screen text-primary overflow-hidden">
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
        <Route path="/login">
          <LogIn data={data} />
        </Route>
        <Route path="/pricing">
          <Pricing data={data} />
        </Route>
        <Route path="/shopping/:category/:product-name-slug/:product-id">
          <Product data={data} />
        </Route>
        <Route path="/shopping/:category?">
          <ProductList data={data} />
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
