import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { SocialIcon } from "react-social-icons";

const ContactDiv = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;
const SocIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <h1>Contact</h1>
        <ContactDiv>
          <h3>Brian Eichenberger</h3>
          <p>
            <Icon name="mail" /> brianeichenberger@me.com
          </p>
          <p>
            <span>
              <Icon name="phone" />
            </span>
            (952) 270 4455
          </p>
          <SocIcons>
            <SocialIcon network="email" url="mailto:brianeichenberger@me.com" />
            <SocialIcon url="https://twitter.com/brianeichen" />
            <SocialIcon url="https://www.facebook.com/brian.eichenberger" />
            <SocialIcon url="https://linkedin.com/in/brian-eichenberger-5bb9547a" />
            <SocialIcon url="https://github.com/ike76" />
          </SocIcons>
        </ContactDiv>
      </Fragment>
    );
  }
}
