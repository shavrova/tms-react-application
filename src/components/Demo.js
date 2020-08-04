import React, { Component } from "react";

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.test.scenarioName}</h1>
      </div>
    );
  }
}
