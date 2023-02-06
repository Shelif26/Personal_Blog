import classes from "./Header.module.css";
import Description from "./UI/Description";
import TechHead from "./Content/TechHead";
import TechnicalSkill from "./Content/TechnicalSkill";
import React, { useState } from "react";

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div className={classes.Headcontainer}>
        <div className={classes.child1}>
          <h1>Hello I'm Shelif</h1>
          <h4>A Developer</h4>
          <Description />
        </div>

        <img
          className={classes.imagepic}
          alt="header"
          src={require("./Content/ImagesCombo/My project.png")}
        />
      </div>
      <hr />
      <div className={classes.techdiv}>
        <h3 className={classes.techdivH4}>My Applications</h3>
        {!isEditing && (
          <div className={classes.disdiv}>
            <span className={classes.disdiv1}>
              <p className={classes.techdes1}>The Expense Calculator</p>
              <p className={classes.techdes1}>The Food App</p>
              <p className={classes.techdes1}>React simple Form</p>
            </span>
            <span className={classes.disdiv2}>
              <p className={classes.techdes}>These are all the web applications created by using JavaScript</p>
              <button onClick={startEditingHandler}>Expand</button>
            </span>
          </div>
        )}
        {isEditing && <TechnicalSkill onCancel={stopEditingHandler} />}
      </div>
      <hr className={classes.techhr}/>
      <TechHead />
    </>
  );
};

export default Header;
