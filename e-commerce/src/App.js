import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductList";

function App() {
  const language = "en";
  const data = useSelector((store) => store[language]);
  return (
    <div className="App text-primary">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route exact path="/about">
            <About data={data} />
          </Route>
          <Route exact path="/productlist">
            <ProductList data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
