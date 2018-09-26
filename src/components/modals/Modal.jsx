import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import TwelveScales from "../projects/TwelveScales.jsx";

const modalManager = {
  "12 Scales": <TwelveScales />,
  HomeComp: "homecomp goes here",
  TripSync: "tripsync goes here",
  FlightSync: "flightsync goes here"
};

class ModalContainer extends Component {
  render() {
    const { content, onClose } = this.props;
    return (
      <Modal open={content} onClose={onClose}>
        <Modal.Content>{modalManager[content]}</Modal.Content>
      </Modal>
    );
  }
}

export default ModalContainer;
