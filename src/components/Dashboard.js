import React, { Component } from "react";
import { connect } from "react-redux";
import { getScenarios } from "../actions/ScenarioActions";
import { getFeatures } from "../actions/FeatureActions";
import PropTypes from "prop-types";
import AllFeaturesView from "./Scenario/AllFeaturesView";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getFeatures();
    if (!this.props.security.validToken) {
      this.props.history.push("/login");
    }
  }

  render() {
    const { scenarios } = this.props.scenario;
    const { features } = this.props.feature;

    return (
      <div className="container ml-5 mr-5">
        <AllFeaturesView features={features} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  scenario: PropTypes.object.isRequired,
  getScenarios: PropTypes.func.isRequired,

  feature: PropTypes.object.isRequired,
  getFeatures: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  scenario: state.scenario,
  feature: state.feature,
  security: state.security,
});

export default connect(mapStateToProps, { getScenarios, getFeatures })(
  Dashboard
);
