import React from "react";
import { Link } from "react-router-dom";

const CreateScenarioButton = () => {
  return (
    <React.Fragment>
      <Link to="/createScenario" class="btn btn-lg btn-info">
        Create new scenario
      </Link>
    </React.Fragment>
  );
};

export default CreateScenarioButton;
