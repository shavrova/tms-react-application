import React, { Component } from "react";
import ScenariosTreeView from "./Scenario/ScenariosTreeView";
import { connect } from "react-redux";
import { getScenarios } from "../actions/ScenarioActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getScenarios();
  }

  render() {
    const { scenarios } = this.props.scenario;

    return (
      <div className="container ml-5 mr-5">
        <ScenariosTreeView scenarios={scenarios} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  scenario: PropTypes.object.isRequired,
  getScenarios: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  scenario: state.scenario,
});

export default connect(mapStateToProps, { getScenarios })(Dashboard);
