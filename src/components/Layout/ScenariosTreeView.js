import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { Link } from "react-router-dom";
import Demo from "../Demo";
import ScenarioView from "../Scenario/ScenarioView";
import FeatureView from "../feature/FeatureView";
import ReactDOM from "react-dom";

class ScenariosTreeView extends Component {
  handleClick(s, e) {
    ReactDOM.render(
      <ScenarioView scenario={s} />,
      document.querySelector("#scenario-container")
    );
  }
  render() {
    const { scenarios } = this.props;
    return (
      <div className="container">
        <div class="row">
          <div className="col mr-auto">
            <TreeView
              className="scenarioTree"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label="All Scenarios">
                {scenarios.map((scenario) => (
                  <TreeItem
                    nodeId="2"
                    label={scenario.scenarioName}
                    onClick={() => this.handleClick(scenario)}
                  ></TreeItem>
                ))}
              </TreeItem>
            </TreeView>
          </div>
          <div className="col ml-auto">
            <div id="scenario-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScenariosTreeView;
