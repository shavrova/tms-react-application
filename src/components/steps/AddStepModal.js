import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { createStep } from "../../actions/StepActions";
import { connect } from "react-redux";
import classnames from "classnames";

export class AddStepModal extends Component {
  constructor() {
    super();

    this.state = {
      stepName: "",
      comment: "",
      methodName: "",
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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newStep = {
      stepName: this.state.stepName,
      comment: "",
      methodName: "",
    };

    this.props.createStep(newStep, this.props.history);

    if (Object.keys(this.state.errors).length === 0) {
      //TODO: hide only if successs
      this.props.onHide();
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
          <form onSubmit={this.onSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Create Step</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                name="stepName"
                value={this.state.stepName}
                onChange={this.onChange}
                className={classnames("form-control form-control-lg", {
                  "is-invalid":
                    errors.stepName ||
                    (errors.message && errors.message.includes("Step name")),
                })}
                placeholder="Step name"
                type="text"
              />
              {errors.stepName && (
                <div className="invalid-feedback text-md-left">
                  {errors.stepName}
                </div>
              )}
              {errors.message && errors.message.includes("Step name") ? (
                <React.Fragment>
                  <div className="invalid-feedback text-md-left">
                    {errors.message}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.onHide}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={this.onSubmit}>
                Create
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

AddStepModal.propTypes = {
  createStep: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createStep })(AddStepModal);
