import classes from "./TechnicalSkill.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TechnicalSkill = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);
  const [isEditing3, setIsEditing3] = useState(false);
  const [loading, setLoading] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler2 = () => {
    setIsEditing2(true);
  };

  const stopEditingHandler2 = () => {
    setIsEditing2(false);
  };

  const startEditingHandler3 = () => {
    setIsEditing3(true);
  };

  const stopEditingHandler3 = () => {
    setIsEditing3(false);
  };
  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <div className={classes.TechnicalSkillContainer}>
        <h2 className={classes.work}>Work</h2>
        <h1 className={classes.head}>Some of my projects</h1>

        <div className={classes.Project}>
          <img
            className={classes.projectimg}
            alt="foodapp"
            src={require("./ImagesCombo/foodappp.jpg")}
          />
          {!isEditing && (
            <>
              <motion.div
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div className={classes.ProjectChild}>
                  <p className={classes.H4}>The Food Ordering App</p>
                  <p className={classes.ProjectDescription}>
                    Created a simple web app that helps to order food can add
                    food items and get how much it costs.
                  </p>
                </div>
              </motion.div>
              <button
                onClick={startEditingHandler}
                className={classes.formbutton}
              >
                <span>Expand</span>
              </button>
            </>
          )}
          {isEditing && (
            <>
              <hr />
              <button
                onClick={stopEditingHandler}
                className={classes.formbutton}
              >
                <span>Collapse</span>
              </button>
              <motion.div
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <p className={classes.H4}>The Food Ordering App</p>
                  <p className={classes.ProjectDescription}>
                    something something something something something something
                    something something something something something something
                    something something something something something something
                    something something something something something something
                    something something something something something something
                    something something something something something something
                  </p>
                  <img
                    className={classes.eximg1}
                    src={require("../Content/ImagesCombo/food1.png")}
                  />
                  <img
                    className={classes.eximg4}
                    src={require("../Content/ImagesCombo/food2.png")}
                  />
                  <p className={classes.ProjectDescription}>
                    something something something something something something
                    something something something something something something
                    something something something something something something
                  </p>
                  <img
                    className={classes.eximg1}
                    src={require("../Content/ImagesCombo/food4.png")}
                  />
                  <img
                    className={classes.eximg4}
                    src={require("../Content/ImagesCombo/food3.png")}
                  />
                  <div>
                    <button onClick={handleClick}>
                      <a href="https://the-food-order-app.vercel.app/">
                        Have a Look
                      </a>
                    </button>
                    {loading && (
                      <div className="loading-popup">
                        <p>Loading...</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
        {/* --------------------------------------------------------------------- */}
        <div className={classes.Project}>
          <img
            className={classes.projectimg}
            alt="familyapp"
            src={require("./ImagesCombo/familyapp.gif")}
          />
          {!isEditing2 && (
            <>
              <motion.div
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div className={classes.ProjectChild}>
                  <p className={classes.H4}>The Food Ordering App</p>
                  <p className={classes.ProjectDescription}>
                    It is an web-app which is used to record the day-to-day
                    expense with respect to year .
                  </p>
                </div>
              </motion.div>
              <button
                onClick={startEditingHandler2}
                className={classes.formbutton}
              >
                <span>Expand</span>
              </button>
            </>
          )}
          {isEditing2 && (
            <>
              <button
                onClick={stopEditingHandler2}
                className={classes.formbutton}
              >
                <span>Collapse</span>
              </button>
              <motion.div
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <p className={classes.H4}>The Expense App</p>
                  <p className={classes.ProjectDescription}></p>
                  <img
                    className={classes.eximg1}
                    src={require("../Content/ImagesCombo/expense3.png")}
                  />
                  <img
                    className={classes.eximg4}
                    src={require("../Content/ImagesCombo/expense1.png")}
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        <div className={classes.Project}>
          <img
            className={classes.projectimg}
            alt="reactform"
            src={require("./ImagesCombo/react-forms.gif")}
          />
          {!isEditing3 && (
            <>
              <motion.div
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div className={classes.ProjectChild}>
                  <p className={classes.H4}>The React Black Form</p>
                  <p className={classes.ProjectDescription}>
                    A very basic model form has no background operation only UI.
                  </p>
                </div>
              </motion.div>
              <button
                onClick={startEditingHandler3}
                className={classes.formbutton}
              >
                <span>Expand</span>
              </button>
            </>
          )}
          {isEditing3 && (
            <>
              <button
                onClick={stopEditingHandler3}
                className={classes.formbutton}
              >
                <span>Collapse</span>
              </button>
              <motion.div
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <p className={classes.H4}>The Food Ordering App</p>
                  <p className={classes.ProjectDescription}></p>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TechnicalSkill;
