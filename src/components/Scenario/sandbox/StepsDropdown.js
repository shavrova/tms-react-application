import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";

export class StepsDropdown extends Component {
  render() {
    return (
      <div>
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
              options={this.props.options}
              defaultValue={this.props.selected}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StepsDropdown);
