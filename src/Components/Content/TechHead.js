import classes from "./TechHead.module.css";

const TechHead = () => {
  return (
    <div className={classes.techContainer}>
      <h2 className={classes.techHeading}>Technical Skills</h2>
      <div className={classes.techContainerChild}>
        <img alt="javacript" src={require("./ImagesCombo/Javascript_Logo.png")}/>

        <img alt="typescript" src={require("./ImagesCombo/Typescript_logo_2020.svg.png")} />

        <img alt="html" src={require("./ImagesCombo/html5-logo.png")} />

        <img alt="css" src={require("./ImagesCombo/CSS3_logo.svg.png")} />

        <img alt="python" src={require("./ImagesCombo/Python-Logo-Free-Download-PNG.png")} />

        <img alt="nodejs" src={require("./ImagesCombo/2560px-Node.js_logo.svg.png")} />

        <img alt="reactjs" src={require("./ImagesCombo/React-icon.svg.png")} />
      </div>
    </div>
  );
};

export default TechHead;
