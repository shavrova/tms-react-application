import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createScenario } from "../../actions/ScenarioActions";
import { getFeatures } from "../../actions/FeatureActions";
import classnames from "classnames";

class ScenarioForm extends Component {
  constructor() {
    super();

    this.state = {
      scenarioName: "",
      scenarioDescription: "",
      featureId: "",
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
    };

    this.props.createScenario(newScenario, this.props.history);
  }

  render() {
    const { errors } = this.state;
    const { features } = this.props.feature;
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
                {/*-------------FEATUTE ID FIELD : featureId --------------*/}
                {/*   <div className="form-group">
                  <input
                    className={classnames("form-control form-control-lg", {
                      "is-invalid":
                        errors.featureId ||
                        (errors.message &&
                          errors.message.includes("Feature id")),
                    })}
                    placeholder="Feature id"
                    name="featureId"
                    value={this.state.featureId}
                    onChange={this.onChange}
                  ></input>
                  {errors.featureId && (
                    <div className="invalid-feedback text-md-left">
                      {errors.featureId}
                    </div>
                  )}
                  {errors.message && errors.message.includes("Feature id") ? (
                    <React.Fragment>
                      <div className="invalid-feedback text-md-left">
                        {errors.message}
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                </div>
                  */}
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
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  feature: state.feature,
});

export default connect(mapStateToProps, { createScenario, getFeatures })(
  ScenarioForm
);
