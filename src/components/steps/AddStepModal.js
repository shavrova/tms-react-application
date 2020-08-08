import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AddStepModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>Create Step</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="form-control form-control-lg"
          placeholder="Step name"
          type="text"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary">Create</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddStepModal;
