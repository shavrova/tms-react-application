import React, { Component } from "react";
import { connect } from "react-redux";
import { getScenarios } from "../actions/ScenarioActions";
import { getFeatures } from "../actions/FeatureActions";
import PropTypes from "prop-types";
import TestsTreeView from "./Scenario/TestsTreeView";
import EditScenarioButton from "./Scenario/EditScenarioButton";

class Dashboard extends Component {
  componentDidMount() {
    //this.props.getScenarios();
    this.props.getFeatures();
  }

  render() {
    const { scenarios } = this.props.scenario;
    const { features } = this.props.feature;

    return (
      <div className="container ml-5 mr-5">
        <TestsTreeView features={features} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  scenario: PropTypes.object.isRequired,
  getScenarios: PropTypes.func.isRequired,

  feature: PropTypes.object.isRequired,
  getFeatures: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  scenario: state.scenario,
  feature: state.feature,
});

export default connect(mapStateToProps, { getScenarios, getFeatures })(
  Dashboard
);
