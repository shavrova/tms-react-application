import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getScenario } from "../../actions/ScenarioActions";
import EditScenarioButton from "./EditScenarioButton";
import { Link } from "react-router-dom";

class ScenarioView extends Component {
  // componentDidMount() {
  //   this.props.getScenario(scenarioId, this.props.history);
  // }

  render() {
    const { scenario } = this.props;
    return (
      <div className="single-scenatio-view">
        <div className="col">
          {/*<EditScenarioButton scenarioId={scenario.scenarioId.toString()} />*/}
        </div>
        <br />
        <div className="col">
          <h1>{scenario.scenarioName} </h1>
        </div>
        <hr />
        {/*------------------------- Created  field -------------------------*/}
        <div className="form-group row">
          <label for="createdAt" className="col-sm-2 col-form-label">
            Created:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="createdAt"
              value={scenario.createdAt}
            />
          </div>
        </div>

        {/*------------------------- Scenatio Description field -------------------------*/}
        <div className="card">
          <h5 className="card-header">Description</h5>
          <div className="card-body">
            <p className="card-text">{scenario.scenarioDescription}</p>
          </div>
        </div>
        <br />
        {/*------------------------- Scenatio Feature field -------------------------*/}

        <div className="card">
          <h5 className="card-header">Feature</h5>
          <div className="card-body">
            <p className="card-text">{scenario.featureId}</p>
          </div>
        </div>

        <br />
        <div className="card">
          <div className="card-header">
            <h5>Steps</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Open Shit</li>
            <li className="list-group-item">Check another shit</li>
            <li className="list-group-item">Close</li>
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
