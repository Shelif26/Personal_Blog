import classes from "./TechnicalSkill.module.css";

const TechnicalSkill = () => {
  return (
    // <---------------------------------------For Python--------------------------------------->
    <>
      <div className={classes.TechnicalSkillContainer}>
        <div className={classes.heading}>
          <h2>Projects</h2>
        </div>

        <div className={classes.Project}>
          <h4 className={classes.domain}>
            Programming Language : Python <i class="fa-brands fa-python"></i>
          </h4>
          <p>Framework : Django</p>
          <div className={classes.ProjectChild}>
            <h4>Project : College Automation Software</h4>
            <p className={classes.ProjectDescription}>
              Description : Created a login page for the students to get their
              personal and mark details, and also for the administration to edit
              and upload information in the web page.
            </p>
            <a href="">
              <i class="fa-solid fa-hand-point-right"></i> Have a Look
            </a>
          </div>
        </div>
        {/* <---------------------------------------For JavaScript---------------------------------------> */}
        <div className={classes.Project}>
          <h4 className={classes.domain}>
            Programming Language : ES6 JavaScript{" "}
            <i class="fa-brands fa-js"></i>
          </h4>

          <div className={classes.ProjectChild}>
            <h4>Project : Crud Application</h4>
            <p className={classes.ProjectDescription}>
              Description : Created a login page for the students to get their
              personal and mark details, and also for the administration to edit
              and upload information in the web page.
            </p>
            <a href="">
              <i class="fa-solid fa-hand-point-right"></i> Have a Look
            </a>
          </div>
        </div>
        {/* <---------------------------------------For JavaScript node/express---------------------------------------> */}
        <div className={classes.Project}>
          <h4 className={classes.domain}>
            Programming Language : JavaScript{" "}
            <i class="fa-brands fa-python"></i>
          </h4>
          <p>
            Framework : Node.js <i class="fa-brands fa-node"></i>
          </p>
          <p>Express.js used as a Framework in Node.js</p>
          <div className={classes.ProjectChild}>
            <h4>Project : Online Shopping App</h4>
            <p className={classes.ProjectDescription}>
              Description : Created a login page for the students to get their
              personal and mark details, and also for the administration to edit
              and upload information in the web page.
            </p>
            <a href="">
              <i class="fa-solid fa-hand-point-right"></i> Have a Look
            </a>
          </div>
        </div>
        <h4 className={classes.ProjectFooter}>
          <i class="fa-solid fa-hand-point-right"></i> These are all the project
          done by me <i class="fa-solid fa-hand-point-left"></i>
        </h4>
      </div>
    </>
  );
};

export default TechnicalSkill;
