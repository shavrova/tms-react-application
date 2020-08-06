import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import ScenarioView from "./ScenarioView";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class TestsTreeView extends Component {
  handleClick(s, e) {
    //onClick={() => this.handleClick(scenario)}
    ReactDOM.render(
      <ScenarioView scenario={s} />,
      document.querySelector("#scenario-container")
    );
  }

  render() {
    //const { scenarios } = this.props;
    const { features } = this.props;
    return (
      <div className="container">
        <div class="row">
          <div className="col mr-auto">
            <TreeView
              className="scenarioTree"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label="All Features">
                {features.map((feature) => (
                  <TreeItem nodeId="2" label={feature.featureName}>
                    {feature.scenarios.map((scenario) => (
                      <TreeItem
                        nodeId="3"
                        label={scenario.scenarioName}
                      ></TreeItem>
                    ))}
                  </TreeItem>
                ))}
              </TreeItem>
            </TreeView>
          </div>
          <Link to="/test">Edit</Link>
          <div className="col ml-auto">
            <div id="scenario-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestsTreeView;
