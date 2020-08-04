import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getScenario } from "../../actions/ScenarioActions";
import { Tabs, Tab } from "@material-ui/core";
class ScenarioView extends Component {
  // componentDidMount() {
  //   this.props.getScenario(scenarioId, this.props.history);
  // }

  render() {
    const { scenario } = this.props;
    return (
      <div className="single-scenatio-view">
        <h1>{scenario.scenarioName} </h1>
        <hr />

        {/*------------------------- Created  field -------------------------*/}
        <div class="form-group row">
          <label for="createdAt" class="col-sm-2 col-form-label">
            Created:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="createdAt"
              value={scenario.createdAt}
            />
          </div>
        </div>

        <hr />

        {/*------------------------- Scenatio Description field -------------------------*/}

        <div class="card">
          <h5 class="card-header">Description</h5>
          <div class="card-body">
            <p class="card-text">{scenario.scenarioDescription}</p>
          </div>
        </div>

        <br />
        <div class="card">
          <div class="card-header">
            <h5>Steps</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Open Shit</li>
            <li class="list-group-item">Check another shit</li>
            <li class="list-group-item">Close</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ScenarioView;
// ScenarioView.propTypes = {
//   getScenario: PropTypes.func.isRequired,
//   scenario: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   scenario: state.scenario.scenario,
// });

// export default connect(mapStateToProps, { getScenario })(ScenarioView);
