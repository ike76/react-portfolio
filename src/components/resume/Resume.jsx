import React, { Component } from "react";

import WorkItem from "./WorkItem";
import SkillsBar from "./SkillsBar";
import Education from "./Education";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <Education />
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <WorkItem
              company="The Beach Boys"
              jobTitle="Vocals, Bass, Graphic Design"
              dates="March 2015 - January 2018"
              content={
                <div>
                  <p>
                    • In addition to musical duties, I created the artwork for
                    the 2017 'Wild Honey' tour. This included images for
                    T-shirts, laminates, website art, and images for the big
                    screen during live shows.
                  </p>
                  <p>
                    • Together with Jacquelyne Love, I designed the artwork for
                    (Beach Boys' lead singer) Mike Love's{" "}
                    <em>Unleash The Love</em> record. This included page layout
                    for the 18 page CD insert, vinyl, and website images.
                  </p>
                </div>
              }
            />
            <WorkItem
              company="The Four Freshmen"
              jobTitle="Vocals, Guitar, Graphic Design, Website"
              dates="July 1996 - December 2014"
              content={
                <div>
                  <p>
                    • Sang lead vocals, played guitar, and produced several
                    records under our own label.
                  </p>
                  <p>• Designed band website with Wordpress.</p>
                </div>
              }
            />
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <SkillsBar />

          {/* main-col end */}
        </div>{" "}
        {/* End skills */}
      </section>
    );
  }
}
