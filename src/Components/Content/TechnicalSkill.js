import classes from "./TechnicalSkill.module.css";

const TechnicalSkill = () => {
  return (
    // <---------------------------------------For Python--------------------------------------->
    <>
      <div className={classes.TechnicalSkillContainer}>
        <div className={classes.Project}>
          <h4 className={classes.domain}>
            Programming Language : JavaScript <i class="fa-brands fa-js"></i>
          </h4>
          <p>Frontend Framework : React.js</p>
          <p>Backend Framework : Node.js</p>
          <div className={classes.ProjectChild}>
            <h4>Project : The Expense App</h4>
            <img
              className={classes.projectimg}
              src={require("./ImagesCombo/familyapp.gif")}
            />
            <p className={classes.ProjectDescription}>
              Description : It is an web-app which is used to record the
              day-to-day expense with respect to year .
            </p>
            <div className={classes.demo}>
              <a
                className={classes.gitsource}
                href="https://github.com/Shelif26/React_Family_App.git"
              >
                <i class="fa-brands fa-github"></i>
                Source Code
              </a>
              <a
                className={classes.havealook}
                href="https://react-family-app.vercel.app/"
              >
                <i class="fa-solid fa-rocket"></i>
                Have a look
              </a>
            </div>
          </div>
        </div>
        {/* <---------------------------------------For JavaScript---------------------------------------> */}
        <div className={classes.Project}>
          <h4 className={classes.domain}>
            Programming Language : JavaScript <i class="fa-brands fa-js"></i>
          </h4>
          <p>Frontend : React.js</p>
          <p>Backend Framework : Node.js</p>
          <div className={classes.ProjectChild}>
            <h4>Project : The Food Ordering App</h4>
            <img
              className={classes.projectimg}
              src={require("./ImagesCombo/foodapp.gif")}
            />
            <p className={classes.ProjectDescription}>
              Description : Created a simple web app that helps to order food
              can add food items and get how much it costs.
            </p>
            <div className={classes.demo}>
              <a
                className={classes.gitsource}
                href="https://github.com/Shelif26/React_Family_App.git"
              >
                <i class="fa-brands fa-github"></i>
                Source Code
              </a>
              <a
                className={classes.havealook}
                href="https://react-family-app.vercel.app/"
              >
                <i class="fa-solid fa-rocket"></i>
                Have a look
              </a>
            </div>
          </div>
        </div>

        {/* <h4 className={classes.ProjectFooter}>
          <i class="fa-solid fa-hand-point-right"></i> These are all the project
          done by me <i class="fa-solid fa-hand-point-left"></i>
        </h4> */}
      </div>
    </>
  );
};

export default TechnicalSkill;
