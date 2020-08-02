import React, { Component } from "react";
import FileSystemNavigator from "./Layout/FileSystemNavigator";
import ScenarioTable from "./Layout/ScenarioTable";

class Dashboard extends Component {
  render() {
    return (
      <div className="container ml-5 mr-5">
        <div className="row">
          <div className="col">
            <div className="row mr-auto">
              <FileSystemNavigator />
            </div>
          </div>
          <div className="row ml-auto">
            <ScenarioTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
