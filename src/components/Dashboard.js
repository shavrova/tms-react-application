import React, { Component } from "react";
import FileSystemNavigator from "./Layout/FileSystemNavigator";
import CreateScenarioButton from "./CreateScenarioButton";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <CreateScenarioButton />
                <br />
              </div>
              <div className="row">
                <FileSystemNavigator />
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
