import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Row,
} from "reactstrap";
import EditScenarioButton from "./buttons/EditScenarioButton";
import DeleteScenatioButton from "./buttons/DeleteScenatioButton";

import { Link } from "react-router-dom";
import { deleteScenario } from "../../actions/ScenarioActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AllFeaturesView extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: {},
      accordion: [true, false, false],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle(panel) {
    this.setState({
      collapse: {
        ...this.state.collapse,
        [panel]: !this.state.collapse[panel],
      },
    });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    const { features } = this.props;
    return (
      <div className="all-features-view">
        {features.map((feature) => (
          <Card>
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  id="card-header-button"
                  onClick={() => this.toggle(feature.featureId)}
                >
                  {feature.featureName} (Scenarios: {feature.scenarios.length})
                </button>
              </h5>
            </div>
            {feature.scenarios.map((scenario) => (
              <Collapse
                isOpen={this.state.collapse[feature.featureId]}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-10">
                      <span>{scenario.scenarioName}</span>
                    </div>
                    <div className="col-1">
                      <EditScenarioButton scenarioId={scenario.scenarioId} />
                    </div>
                    <div className="col-1">
                      <DeleteScenatioButton scenarioId={scenario.scenarioId} />
                    </div>
                  </div>
                </div>
              </Collapse>
            ))}
          </Card>
        ))}
      </div>
    );
  }
}

export default AllFeaturesView;
