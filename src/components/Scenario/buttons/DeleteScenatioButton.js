import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteScenario } from "../../../actions/ScenarioActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DeleteScenarioButton extends Component {
  onDeleteClick = (id) => {
    this.props.deleteScenario(id);
  };
  render() {
    const scenarioId = this.props.scenarioId;
    return (
      <React.Fragment>
        <Link
          id="scenario-action"
          class="btn btn-link text-dark"
          onClick={this.onDeleteClick.bind(this, scenarioId)}
        >
          Delete
        </Link>
      </React.Fragment>
    );
  }
}

DeleteScenarioButton.propTypes = {
  deleteScenario: PropTypes.func.isRequired,
};

export default connect(null, { deleteScenario })(DeleteScenarioButton);
