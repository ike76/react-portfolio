import React, { Component } from "react";
import BrianPic from "../../images/BrianEichenbergerBeachBoys.jpg";
import { Grid, Container, Image } from "semantic-ui-react";
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-picx"
              src={BrianPic}
              alt="Brian Eichenberger performs with Beach Boys"
            />
            <h2>Contact</h2>
            <p className="address">
              <span>Brian Eichenberger</span>
              <br />
              <span>1102 Navaho Drive</span>
              <br />
              <span>Brentwood, TN 37027 US</span>
              <br />
              <span>(952) 270-4455</span>
              <br />
              <span>brianeichenberger@me.com</span>
              <br />
            </p>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              During my touring years with
              <em> The Four Freshmen</em> and <em>The Beach Boys</em> I could
              often be found hiding backstage with my face buried in my MacBook.
            </p>
            <p>
              I'd be designing album art for our next recording, or arranging
              air transportation, <strong>hacking together a website</strong>,
              managing our record label or taking a course on <em>Lynda.com</em>{" "}
              to learn some new technology.
            </p>
            <p>
              Gradually I realized that I <strong>enjoy the process</strong> of
              learning & leveraging tech to solve problems more than performing.
              I started digging a little deeper into{" "}
              <strong>web development</strong>. (Online HTML and CSS courses,
              then Hartl's <em>Ruby on Rails</em> book.)
            </p>
            <p>
              By 2017, I was more excited about building apps than traveling.
              With my wife waiting at home and a baby on the way, I got off the
              road. I signed up for
              <em> Thinkful</em>
              's full-time full-stack JavaScript course and never looked back.
            </p>
            <p>
              Now I'm building the web apps I always wished for: An app to{" "}
              <a href="#">search flights for a group</a>, an app to{" "}
              <a href="#">manage group travel</a>, and most recently, an app
              that helps beginner piano students{" "}
              <a href="#">learn Major Scales</a> in a fraction of the time it
              took me to learn them in school.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
