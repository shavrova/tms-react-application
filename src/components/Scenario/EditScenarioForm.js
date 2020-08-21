import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getScenario, updateScenario } from "../../actions/ScenarioActions";
import { getFeatures } from "../../actions/FeatureActions";
import { getSteps } from "../../actions/StepActions";
import { Dropdown, Button } from "semantic-ui-react";

class EditScenarioForm extends Component {
  constructor() {
    super();

    this.state = {
      scenarioId: "",
      scenarioName: "",
      scenarioDescription: "",
      featureId: "",
      steps: [],
      errors: {},
      addedSteps: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const {
      scenarioId,
      scenarioName,
      scenarioDescription,
      featureId,
      steps,
    } = nextProps.scenario;

    this.setState({
      scenarioId,
      scenarioName,
      scenarioDescription,
      featureId,
      steps,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getScenario(id, this.props.history);
    this.props.getSteps();
    this.props.getFeatures();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateScenario = {
      scenarioId: this.state.scenarioId,
      scenarioName: this.state.scenarioName,
      scenarioDescription: this.state.scenarioDescription,
      featureId: this.state.featureId,
      steps: this.state.steps,
    };

    this.props.updateScenario(updateScenario, this.props.history);
  }

  handleRemoveStep = (e, step) => {
    e.preventDefault();
    const { steps } = this.state;
    const updated = steps.filter((s) => s.stepId !== step.stepId);
    return this.setState({ steps: updated });
  };

  handleSelect = (e, data) => {
    e.preventDefault();
    this.setState({ [data.name]: data.value });
    const { steps } = this.state;
    steps.push(data.value);
    return this.setState({ steps: steps });
  };

  render() {
    const { features } = this.props.feature;
    const allSteps = this.props.step.allSteps;
    const { errors } = this.state;

    const stepsOptions = allSteps.map((step) => ({
      value: step,
      text: step.stepName,
    }));

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Update scenario</h5>
            <hr />
            <form onSubmit={this.onSubmit}>
              {/*-------------Scenario Name --------------*/}
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid":
                      errors.scenarioName ||
                      (errors.message &&
                        errors.message.includes("Scenario name")),
                  })}
                  placeholder="Scenario Name"
                  name="scenarioName"
                  value={this.state.scenarioName}
                  onChange={this.onChange}
                />
                {errors.scenarioName && (
                  <div className="invalid-feedback text-md-left">
                    {errors.scenarioName}
                  </div>
                )}
                {errors.message && errors.message.includes("Scenario name") ? (
                  <React.Fragment>
                    <div className="invalid-feedback text-md-left">
                      {errors.message}
                    </div>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </div>
              {/*-------------Description --------------*/}

              <div className="form-group">
                <textarea
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.scenarioDescription,
                  })}
                  placeholder="Scenario Description"
                  name="scenarioDescription"
                  value={this.state.scenarioDescription}
                  onChange={this.onChange}
                />
                {errors.scenarioDescription && (
                  <div className="invalid-feedback text-md-left">
                    {errors.scenarioDescription}
                  </div>
                )}
              </div>
              {/*-------------Feature Dropdown --------------*/}

              <h6>Select feature:</h6>
              <div className="form-group">
                <select
                  name="featureId"
                  className="form-control form-control-lg"
                  onChange={this.onChange}
                  onSelect={this.onSelect}
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

                <ul className="list-group list-group-flush">
                  {/* ERROR HERE: TypeError: Cannot read property 'map' of undefined     */}
                  {this.state.steps.map((step) => (
                    <li className="list-group-item">
                      {step.stepName}
                      <Button onClick={(e) => this.handleRemoveStep(e, step)}>
                        X
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              <br />
              <h6>Select step to add:</h6>
              <Dropdown
                placeholder="Select step"
                name="addedSteps"
                fluid
                search
                selection
                options={stepsOptions}
                onChange={this.handleSelect}
              />
              <input type="submit" className="btn btn-primary btn-block mt-4" />
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditScenarioForm.propTypes = {
  getScenario: PropTypes.func.isRequired,
  updateScenario: PropTypes.func.isRequired,
  scenario: PropTypes.object.isRequired,
  getFeatures: PropTypes.func.isRequired,
  feature: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getSteps: PropTypes.func.isRequired,
  step: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  scenario: state.scenario.scenario,
  feature: state.feature,
  errors: state.errors,
  step: state.step,
});

export default connect(mapStateToProps, {
  getScenario,
  updateScenario,
  getFeatures,
  getSteps,
})(EditScenarioForm);
