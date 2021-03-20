import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "./assets/css/styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}
