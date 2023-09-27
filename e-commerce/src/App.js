import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const language = "en";
  const data = useSelector((store) => store[language]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
