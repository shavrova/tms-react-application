import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getScenario } from "../../actions/ScenarioActions";

class ScenarioView extends Component {
  // componentDidMount() {
  //   this.props.getScenario(scenarioId, this.props.history);
  // }

  render() {
    const { scenario } = this.props;
    return (
      <div>
        <h1>Scenario View</h1>
        {console.log("test" + scenario.scenarioName)}
        <span className="mx-auto">{scenario.scenarioName}1</span>
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
