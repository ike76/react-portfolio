import React, { Component, Fragment, createContext } from "react";
import Waypoint from "react-waypoint";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Resume from "./components/resume/Resume.jsx";
import Modal from "./components/modals/Modal.jsx";
import Footer from "./components/footer/Footer.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import { sections } from "./GeneralConfig/index";
import Section from "./components/Section.jsx";

export const WaypointContext = createContext();
class App extends Component {
  state = {
    modal: null,
    waypoint: null,
    wpArray: []
  };
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
  render() {
    return (
      <div className="App">
        <WaypointContext.Provider
          value={{
            wpEnter: this.handleWaypointEnter,
            wpExit: this.handleWaypointExit,
            currentSection: this.state.waypoint
          }}
        >
          <Fragment>
            <Modal
              content={this.state.modal}
              onClose={() => this.setState({ modal: null })}
            />

            <Section color="#161415" name="header">
              <Header />
            </Section>
            <Section color="lightblue" name="about">
              <About />
            </Section>
            <Section color="black" name="resume">
              <Resume />
            </Section>
            <Section color="grey" name="portfolio">
              <Portfolio handleModal={this.handleSetModal} />
            </Section>
            <Section color="black" name="contact">
              <Contact />
            </Section>
            <Footer />
          </Fragment>
        </WaypointContext.Provider>
      </div>
    );
  }
}

export default App;
