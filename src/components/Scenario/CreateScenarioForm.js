import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createScenario } from "../../actions/ScenarioActions";
import { getFeatures } from "../../actions/FeatureActions";
import { getSteps } from "../../actions/StepActions";
import classnames from "classnames";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";

class ScenarioForm extends Component {
  constructor() {
    super();

    this.state = {
      scenarioName: "",
      scenarioDescription: "",
      featureId: "",
      steps: [],
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    this.props.getFeatures();
    this.props.getSteps();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newScenario = {
      scenarioName: this.state.scenarioName,
      scenarioDescription: this.state.scenarioDescription,
      featureId: this.state.featureId,
      steps: this.state.steps,
    };

    this.props.createScenario(newScenario, this.props.history);
  }

  handleStepsChange = (e, { value }) => {
    if (this.state.steps.length > value.length) {
      const difference = this.state.steps.filter((x) => !value.includes(x));

      console.log(difference); // this is the item
      return false;
    }
    return this.setState({ steps: value });
  };

  render() {
    const { errors } = this.state;
    const { features } = this.props.feature;
    const allSteps = this.props.step.steps;

    const stepsOptions = _.map(allSteps, (step) => ({
      key: step.stepId,
      text: step.stepName,
      value: step,
    }));

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              {/*-------------ON SUBMIT FORM --------------*/}
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  {/*-------------SCENARIO NAME FIELD : scenarioName --------------*/}
                  <h1>Create new scenario</h1>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid":
                        errors.scenarioName ||
                        (errors.message &&
                          errors.message.includes("Scenario name")),
                    })}
                    placeholder="Scenario name"
                    name="scenarioName"
                    value={this.state.scenarioName}
                    onChange={this.onChange}
                  />
                  {errors.scenarioName && (
                    <div className="invalid-feedback text-md-left">
                      {errors.scenarioName}
                    </div>
                  )}
                  {errors.message &&
                  errors.message.includes("Scenario name") ? (
                    <React.Fragment>
                      <div className="invalid-feedback text-md-left">
                        {errors.message}
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                </div>
                {/*-------------SCENARIO DESCRIPTION FIELD : scenarioDescription --------------*/}
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid":
                        errors.scenarioDescription ||
                        (errors.message &&
                          errors.message.includes("Description")),
                    })}
                    placeholder="Scenario Description"
                    name="scenarioDescription"
                    value={this.state.scenarioDescription}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.scenarioDescription && (
                    <div className="invalid-feedback text-md-left">
                      {errors.scenarioDescription}
                    </div>
                  )}
                  {errors.message && errors.message.includes("Desctiption") ? (
                    <React.Fragment>
                      <div className="invalid-feedback text-md-left">
                        {errors.message}
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                </div>
                {/*-------------FEATURE DROPDOWN --------------*/}

                <h6>Select feature:</h6>
                <div className="form-group">
                  <select
                    name="featureId"
                    className="form-control form-control-lg"
                    onChange={this.onChange}
                  >
                    {features.map((feature) => (
                      <option value={feature.featureId}>
                        {feature.featureName}
                      </option>
                    ))}
                  </select>
                </div>

                {/*-------------STEPS --------------*/}
                <br />
                <div className="card">
                  <div className="card-header">
                    <h5>Steps</h5>
                  </div>
                  <div className="m-5">
                    <Dropdown
                      placeholder="Select step"
                      name="steps"
                      fluid
                      multiple
                      search
                      selection
                      options={stepsOptions}
                      onChange={this.handleStepsChange}
                    />
                  </div>
                </div>

                {/*-------------SUBMIT BUTTON --------------*/}
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                  value="Create"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ScenarioForm.propTypes = {
  createScenario: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getFeatures: PropTypes.func.isRequired,
  feature: PropTypes.object.isRequired,
  getSteps: PropTypes.func.isRequired,
  step: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  feature: state.feature,
  step: state.step,
});

export default connect(mapStateToProps, {
  createScenario,
  getFeatures,
  getSteps,
})(ScenarioForm);
