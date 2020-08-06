import React, { Component } from "react";
import { Button, Collapse } from "react-bootstrap";

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // toggle(e) {
  //   console.log('testing e',e)
  //   if (e.target.class === 'collapse') {
  //       e.target.className = 'collapse.in'
  //   } else {
  //       e.target.className = 'collapse'
  //   }
  //}

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  state = {
    open: false,
  };

  render() {
    const { features } = this.props;
    const show = this.state.menu ? "show" : "";

    return (
      <div className="accordion" id="accordionExample">
        {features.map((feature) => (
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  // onClick={this.toggleMenu}
                  onClick={!this.state.open}
                >
                  {feature.featureName}
                </button>
              </h5>
            </div>
            {feature.scenarios.map((scenario) => (
              <Collapse in={this.state.open}>
                <div
                  id="collapseOne"
                  className={"collapse " + show}
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <span>{scenario.scenarioName}</span>
                  </div>
                </div>
              </Collapse>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
