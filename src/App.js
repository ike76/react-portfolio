import React, { Component, Fragment, createContext } from "react";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Portfolio2 from "./components/projects/Portfolio2.jsx";
import Resume from "./components/resume/Resume.jsx";
import Modal from "./components/modals/Modal.jsx";
import Section from "./components/Section.jsx";
import "./index.css";

export const WaypointContext = createContext();

class App extends Component {
  state = {
    modal: "",
    waypoint: null,
    wpArray: [],
    windowHeight: null
  };
  componentDidMount() {
    this.setState({ windowHeight: window.innerHeight });
  }
  handleSetModal = modalName => {
    this.setState({ modal: modalName });
  };
  handleWaypointEnter = waypoint => {
    this.setState({ wpArray: [waypoint, ...this.state.wpArray], waypoint });
  };
  handleWaypointExit = waypoint => {
    const newWpArray = this.state.wpArray.filter(wp => wp !== waypoint);
    this.setState({
      wpArray: newWpArray,
      waypoint: newWpArray[0]
    });
  };
  sections = ["header", "portfolio", "about", "resume", "contact"];
  render() {
    return (
      <div className="App">
        <WaypointContext.Provider
          value={{
            wpEnter: this.handleWaypointEnter,
            wpExit: this.handleWaypointExit,
            currentSection: this.state.waypoint,
            setModal: this.handleSetModal
          }}
        >
          <Fragment>
            <Modal
              content={this.state.modal}
              onClose={() => this.setState({ modal: null })}
            />

            <Section
              bgColor="#161415"
              name="header"
              inverted
              sections={this.sections}
              windowHeight={this.state.windowHeight}
            >
              <Header windowHeight={this.state.windowHeight} />
            </Section>

            <Section
              bgColor="#e6e6e6"
              name="portfolio"
              sections={this.sections}
            >
              <Portfolio2 handleModal={this.handleSetModal} />
            </Section>

            <Section
              bgColor="#2b2b2b"
              name="about"
              inverted
              sections={this.sections}
            >
              <About handleModal={this.handleSetModal} />
            </Section>

            <Section bgColor="#f6f6f6" name="resume" sections={this.sections}>
              <Resume />
            </Section>

            <Section
              bgColor="#2b2b2b"
              inverted
              name="contact"
              sections={this.sections}
            >
              <Contact />
            </Section>
          </Fragment>
        </WaypointContext.Provider>
      </div>
    );
  }
}

export default App;
