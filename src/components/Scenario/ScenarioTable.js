import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getScenarios } from "../../actions/ScenarioActions";

class ScenarioTable extends Component {
  componentDidMount() {
    this.props.getScenarios();
  }
  render() {
    const { scenarios } = this.props.scenario;
    return (
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created</th>
            <th>User ID</th>
            <th>Feature ID</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario) => (
            <tr>
              <td>{scenario.scenarioId}</td>
              <td>{scenario.scenarioName}</td>
              <td>{scenario.scenarioDescription}</td>
              <td>{scenario.createdAt}</td>
              <td>{scenario.userId}</td>
              <td>{scenario.featureId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ScenarioTable.propTypes = {
  scenario: PropTypes.object.isRequired,
  getScenarios: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  scenario: state.scenario,
});

export default connect(mapStateToProps, { getScenarios })(ScenarioTable);
