import classes from "./TechnicalSkill.module.css";

const TechnicalSkill = () => {
  return (
    <>
      <div className={classes.TechnicalSkillContainer}>
        <h2 className={classes.work}>Work</h2>
        <h1 className={classes.head}>Some of my projects</h1>
        <div className={classes.Project}>
          <div className={classes.ProjectChild}>
            <p className={classes.H4}>The Food Ordering App</p>
            <p className={classes.ProjectDescription}>
              Created a simple web app that helps to order food can add food
              items and get how much it costs.
            </p>
          </div>
          <img
            className={classes.projectimg}
            alt="foodapp"
            src={require("./ImagesCombo/foodappp.jpg")}
          />
        </div>

        <div className={classes.Project}>
          <div className={classes.ProjectChild}>
            <p className={classes.H4}>The Expense App</p>
            <p className={classes.ProjectDescription}>
              It is an web-app which is used to record the day-to-day expense
              with respect to year .
            </p>
          </div>

          <img
            className={classes.projectimg}
            alt="familyapp"
            src={require("./ImagesCombo/familyapp.gif")}
          />
        </div>

        {/* ------------------------------------------ */}
        <div className={classes.Project}>
          <div className={classes.ProjectChild}>
            <p className={classes.H4}>React Forms</p>
            <p className={classes.ProjectDescription}>
              A very basic model form has no background operation only UI.
            </p>
          </div>
          <img
            className={classes.projectimg}
            alt="reactform"
            src={require("./ImagesCombo/react-forms.gif")}
          />
        </div>
      </div>
    </>
  );
};

export default TechnicalSkill;
