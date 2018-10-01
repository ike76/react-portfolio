import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { scrollTo } from "../header/NavBar.jsx";

const ScrollUpDiv = styled.div`
  width: 100%;
  text-align: center;
  // padding: 2rem;
  & i {
    color: #afafaf;
    transition: 0.5s all;
    cursor: pointer;
    &:hover {
      color: #11abb0;
    }
  }
`;
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ScrollUpDiv>
          <Icon
            name="chevron circle up"
            size="big"
            onClick={() => scrollTo("header")}
          />
        </ScrollUpDiv>
        {/* <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-skype" />
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </footer>
    );
  }
}
