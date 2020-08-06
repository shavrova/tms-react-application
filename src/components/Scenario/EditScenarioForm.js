import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getScenario, updateScenario } from "../../actions/ScenarioActions";
import { getFeatures } from "../../actions/FeatureActions";

class EditScenarioForm extends Component {
  //set state
  constructor() {
    super();

    this.state = {
      scenarioId: "",
      scenarioName: "",
      scenarioDescription: "",
      featureId: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      scenarioId,
      scenarioName,
      scenarioDescription,
      featureId,
    } = nextProps.scenario;

    this.setState({
      scenarioId,
      scenarioName,
      scenarioDescription,
      featureId,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getScenario(id, this.props.history);
    this.props.getFeatures();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelect(e) {
    e.preventDefault();
    console.log("get selected feature id");
  }

  onSubmit(e) {
    e.preventDefault();

    const updateScenario = {
      //  id: this.state.id,
      scenarioId: this.state.scenarioId,
      scenarioName: this.state.scenarioName,
      scenarioDescription: this.state.scenarioDescription,
      featureId: this.state.featureId,
    };

    this.props.updateScenario(updateScenario, this.props.history);
  }

  render() {
    const { features } = this.props.feature;
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update scenario</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Scenario Name"
                    name="scenarioName"
                    value={this.state.scenarioName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Scenario Description"
                    name="scenarioDescription"
                    value={this.state.scenarioDescription}
                    onChange={this.onChange}
                  />
                </div>
                {/*
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Feature Id"
                    name="featureId"
                    onChange={this.onChange}
                    value={this.state.featureId}
                  />
                </div>
                */}
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
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
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
};

const mapStateToProps = (state) => ({
  scenario: state.scenario.scenario,
  feature: state.feature,
});

export default connect(mapStateToProps, {
  getScenario,
  updateScenario,
  getFeatures,
})(EditScenarioForm);
