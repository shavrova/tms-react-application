import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ScenarioForm from "./components/Scenario/CreateScenarioForm";
import { Provider } from "react-redux";
import store from "./store";
import ScenarioTable from "./components/Scenario/ScenarioTable";
import EditScenarioForm from "./components/Scenario/EditScenarioForm";
import StepsView from "./components/steps/StepsView";
import Footer from "./components/Layout/Footer";
import Register from "./components/AAA/Register";
import Login from "./components/AAA/Login";
import setJWTToken from "./util/JWTUtil";
import { SET_CURRENT_USER } from "./actions/types";
import jwt_decode from "jwt-decode";
import { logout } from "./actions/UserActions";
import SecureRoute from "./util/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Header />

            {
              //Public Routes
            }
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {
              //make edit/create buttons protected
            }
            <Switch>
              <SecureRoute exact path="/">
                <Redirect to="/dashboard" />
              </SecureRoute>
              <SecureRoute path="/dashboard" component={Dashboard} />
              <SecureRoute path="/createScenario" component={ScenarioForm} />
              <SecureRoute path="/allScenarios" component={ScenarioTable} />
              <SecureRoute path="/steps" component={StepsView} />
              <SecureRoute
                path="/editScenario/:id"
                component={EditScenarioForm}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
