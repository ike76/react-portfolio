import React, { Component, Fragment } from "react";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Resume from "./components/resume/Resume.jsx";
import Modal from "./components/modals/Modal.jsx";
import Footer from "./components/footer/Footer.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import { sections } from "./GeneralConfig/index";

const Mount = ({ component }) => <component />;

class App extends Component {
  state = {
    modal: null
  };
  handleSetModal = modalName => {
    this.setState({ modal: modalName });
  };
  render() {
    return (
      <div className="App">
        <Fragment>
          <Modal
            content={this.state.modal}
            onClose={() => this.setState({ modal: null })}
          />
          <Header />
          <About />
          <Resume />
          <Portfolio handleModal={this.handleSetModal} />
          <Contact />
          <Footer />
        </Fragment>
      </div>
    );
  }
}

export default App;
