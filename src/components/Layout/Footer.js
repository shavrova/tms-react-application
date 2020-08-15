import React, { Component } from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <Navbar className="navbar navbar-expand-sm bg-success">
          <div className="mr-auto ml-auto text-light">TMS React App</div>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
