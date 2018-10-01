import React, { Component, Fragment, createContext } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Portfolio from "./components/projects/Portfolio.jsx";
import Resume from "./components/resume/Resume.jsx";
import Modal from "./components/modals/Modal.jsx";
import Section from "./components/Section.jsx";
import BrianCrowd from "./images/brianCrowd1000.jpg";
export const WaypointContext = createContext();

class App extends Component {
  state = {
    modal: "",
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
  sections = ["header", "about", "resume", "portfolio", "contact"];
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
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
                bgImage={BrianCrowd}
                name="header"
                inverted
                sections={this.sections}
              >
                <Header />
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
                bgColor="#e6e6e6"
                name="portfolio"
                sections={this.sections}
              >
                <Portfolio handleModal={this.handleSetModal} />
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
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;