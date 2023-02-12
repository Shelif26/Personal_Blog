import classes from "./About.module.css";
import React from "react";

function About() {
  return (
    <div className={classes.mdiv}>
      <div className={classes.aboutdiv}>
        <div className={classes.heading}>
          <h1 className={classes.hh4}>About</h1>
          <h1 className={classes.hh1}>A few Words about me</h1>
        </div>
        <div className={classes.aboutme}>
          <p className={classes.para}>
            Hello World! I'm Shelif, a Web Developer based out of Toronto. From
            choreography on a stage to lines code on a web page, I love
            combining the worlds of logic and creative design to make
            eye-catching, accessible, and user- friendly websites and
            applications.
          </p>
          <p className={classes.para}>
            Technology leads, society follows. The move towards increasing
            inclusivity and diversity in the industry through representation is
            of importance to me.
          </p>
          <p className={classes.para}>
            Even sometimes the price of life in the country. Some people don't
            have time to use the internet.
          </p>
        </div>
      </div>
      <div className={classes.imgdiv}>
        <img
          className={classes.image}
          alt="img"
          src={require("../Content/ImagesCombo/portraitshelif.jpg")}
        />
      </div>
    </div>
  );
}

export default About;
