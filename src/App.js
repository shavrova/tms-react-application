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
import EditScenarioForm from "./components/Scenario/EditScenarioForm";
import StepsView from "./components/steps/StepsView";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/createScenario" component={ScenarioForm} />
            <Route path="/allScenarios" component={ScenarioTable} />
            <Route path="/steps" component={StepsView} />
            <Route path="/editScenario/:id" component={EditScenarioForm} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
