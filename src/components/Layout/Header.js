import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4 bg-success">
        <div className="container ml-0 mr-0">
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav float-left mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item b">
                <a className="nav-link" href="/createScenario">
                  Create scenario
                </a>
              </li>
              <li className="nav-item b">
                <a className="nav-link" href="/steps">
                  Steps
                </a>
              </li>
              <li className="nav-item b">
                <a className="nav-link" href="/allScenarios">
                  All scenarios
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="register.html">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
