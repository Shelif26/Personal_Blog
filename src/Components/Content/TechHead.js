import classes from "./TechHead.module.css";

const TechHead = () => {
  return (
    <div className={classes.techContainer}>
      <h2 className={classes.techHeading}>Technical Skills</h2>
      <div className={classes.techContainerChild}>
        <img src={require("./ImagesCombo/Javascript_Logo.png")}/>

        <img src={require("./ImagesCombo/Typescript_logo_2020.svg.png")} />

        <img src={require("./ImagesCombo/html5-logo.png")} />

        <img src={require("./ImagesCombo/CSS3_logo.svg.png")} />

        <img src={require("./ImagesCombo/Python-Logo-Free-Download-PNG.png")} />

        <img src={require("./ImagesCombo/2560px-Node.js_logo.svg.png")} />

        <img src={require("./ImagesCombo/React-icon.svg.png")} />
      </div>
    </div>
  );
};

export default TechHead;
