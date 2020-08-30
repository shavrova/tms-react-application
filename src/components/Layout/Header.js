import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4 bg-success">
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
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
