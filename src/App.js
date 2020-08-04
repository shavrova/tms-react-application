import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ScenarioForm from "./components/Scenario/CreateScenarioForm";
import { Provider } from "react-redux";
import store from "./store";
import ScenarioTable from "./components/Scenario/ScenarioTable";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createScenario" component={ScenarioForm} />
          <Route path="/allScenarios" component={ScenarioTable} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
