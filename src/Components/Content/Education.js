import classes from "./Education.module.css";
import { College } from "./ImageSlider";
import { Awards } from "./ImageSlider";

const Education = () => {
  return (
    <>
      <div className={classes.educationContainer}>
        <h2 className={classes.heading}>Education</h2>
        <div className={classes.educationContainerchild}>
          <h3 className={classes.collageName}>
            <a href="https://www.sxcce.edu.in/">
              St.Xavier's catholic college of engineering
            </a>
          </h3>
          <p className={classes.degree}>
            Bachelor of Engineering - BE Electronics and Communications
            Engineering
          </p>
          <p className={classes.year}>Jun 2018 - Jun 2022</p>
          <div className={classes.clgimg}>
            <College />
            <Awards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
