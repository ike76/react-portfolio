import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import TwelveScales from "../projects/TwelveScales.jsx";
import HomeComp from "../projects/HomeComp.jsx";
import TripSync from "../projects/TripSync.jsx";
import FlightSync from "../projects/FlightSync.jsx";
const modalManager = {
  "12 Scales": <TwelveScales />,
  HomeComp: <HomeComp />,
  TripSync: <TripSync />,
  FlightSync: <FlightSync />
};

class ModalContainer extends Component {
  render() {
    const { content, onClose } = this.props;
    return (
      <Modal open={!!content} onClose={onClose}>
        <Modal.Content>{modalManager[content]}</Modal.Content>
      </Modal>
    );
  }
}

export default ModalContainer;
