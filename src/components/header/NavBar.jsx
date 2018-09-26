import React from "react";
import styled from "styled-components";
import { sections } from "../../GeneralConfig/index";
const NavBar = () => {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        {sections.map(section => (
          <li key={section.link}>
            <a className="smoothscroll" href={section.link}>
              {section.text}
            </a>
          </li>
        ))}
      </ul>{" "}
    </nav>
  );
};

export default NavBar;
