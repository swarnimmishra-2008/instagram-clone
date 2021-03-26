import { useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./assets/css/styles.css";
import { PrivateRoute } from "./PrivateRoute";
import { Context } from "./Context/GlobalState";
import { db, auth } from "./firebase/config";

export default function App() {
  const { user, setUser } = useContext(Context);
  const history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </div>
  );
}
