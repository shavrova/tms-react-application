import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSteps } from "../../actions/StepActions";
import AddStepModal from "./AddStepModal";
class StepsView extends Component {
  constructor(props) {
    super(props);

    this.state = { modalShow: false };
  }
  componentDidMount() {
    this.props.getSteps();
  }

  render() {
    const { steps } = this.props.step;
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
              {steps.map((step) => (
                <tr>
                  <td>{step.stepName}</td>
                  <td>{step.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <button
            className="btn btn-secondary btn-block"
            onClick={() => this.setState({ modalShow: true })}
          >
            +
          </button>
          {this.state.modalShow ? (
            <AddStepModal
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
            ></AddStepModal>
          ) : null}
          {/*<AddStepModal
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
          */}
        </div>
      </div>
    );
  }
}

StepsView.propTypes = {
  step: PropTypes.object.isRequired,
  getSteps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
});

export default connect(mapStateToProps, { getSteps })(StepsView);
