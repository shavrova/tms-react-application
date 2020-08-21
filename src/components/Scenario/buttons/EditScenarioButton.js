import React from "react";
import { Link } from "react-router-dom";

const CreateScenarioButton = ({ scenarioId }) => {
  return (
    <React.Fragment>
      <Link
        id="scenario-action"
        to={`/editScenario/${scenarioId}`}
        class="btn btn-link text-dark"
      >
        Edit
      </Link>
    </React.Fragment>
  );
};

export default CreateScenarioButton;
