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
            In football now as a megalopolis and at the bow. He is said to have
            lived in this street. Donec in tortor et quam feugiat vulputate. The
            family needed a lake for the kids, a tortor to drink, and the
            hendrerit was.
          </p>
          <p className={classes.para}>
            Curabitur feugiat finbus consequence. Now he flatters the corporal
            layer. Morbids receive an urn of funding, nor a letter of mourning.
            For the red hot pot, it needs to be flattered by the pain of the
            members of Ultricia. No mauris ligula, venenatis as ultricies but,
            the free course of the employee.
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
          src={require("../Content/ImagesCombo/portraitshelif.jpg")}
        />
      </div>
    </div>
  );
}

export default About;
