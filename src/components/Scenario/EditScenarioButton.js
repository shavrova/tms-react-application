import React from "react";
import { Link } from "react-router-dom";

const CreateScenarioButton = ({ scenarioId }) => {
  return (
    <React.Fragment>
      <Link
        id="editScenarioLink"
        to={`/editScenario/${scenarioId}}`}
        class="btn btn-primary"
      >
        Edit
      </Link>
    </React.Fragment>
  );
};

export default CreateScenarioButton;
