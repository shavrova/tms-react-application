import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSteps, createStep } from "../../actions/StepActions";
import { Button, Input } from "semantic-ui-react";
import classnames from "classnames";

class StepsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepName: "",
      comment: "",
      methodName: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //this.state = { modalShow: false };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    this.props.getSteps();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newStep = {
      stepName: this.state.stepName,
      comment: this.state.comment,
      methodName: "",
    };

    this.props.createStep(newStep, this.props.history);

    this.setState({
      stepName: "",
      comment: "",
    });
  }
  render() {
    const { allSteps } = this.props.step;
    const { errors } = this.state;
    return (
      <div className="container w-75 float-center mr-auto ml-auto">
        <div className="row">
          <table class="table table-striped table-bordered ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {allSteps.map((step) => (
                <tr>
                  <td>{step.stepName}</td>
                  <td>{step.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                placeholder="Step Name"
                name="stepName"
                className={classnames("form-control form-control-md", {
                  "is-invalid":
                    errors.stepName ||
                    (errors.message && errors.message.includes("Step name")),
                })}
                value={this.state.stepName}
                onChange={this.onChange}
              ></input>
              {errors.stepName && (
                <div className="invalid-feedback text-md-left">
                  {errors.stepName}
                </div>
              )}
              {errors.message && errors.message.includes("Step") ? (
                <React.Fragment>
                  <div className="invalid-feedback text-md-left">
                    {errors.message}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
            <div className="col-4">
              <Input
                placeholder="comment"
                name="comment"
                value={this.state.comment}
                onChange={this.onChange}
              ></Input>
            </div>
          </div>
          <div className="row">
            <Button type="submit" className="btn btn-block mt-4">
              Add Step
            </Button>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

StepsView.propTypes = {
  step: PropTypes.object.isRequired,
  getSteps: PropTypes.func.isRequired,
  createStep: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  errors: state.errors,
});

export default connect(mapStateToProps, { getSteps, createStep })(StepsView);
