import classes from "./TechHead.module.css";

const TechHead = () => {
  return (
    <div className={classes.techContainer}>
      <h2 className={classes.techHeading}>Technical Skills</h2>
      <div className={classes.techContainerChild}>
        <img
          className={classes.techimg}
          alt="typescript"
          src={require("./ImagesCombo/Typescript_logo_2020.svg.png")}
        />

        <img
          className={classes.techimg}
          alt="nodejs"
          src={require("./ImagesCombo/2560px-Node.js_logo.svg.png")}
        />

        <img
          className={classes.techimg}
          alt="python"
          src={require("./ImagesCombo/nest.png")}
        />

        <img
          className={classes.techimg}
          alt="reactjs"
          src={require("./ImagesCombo/React-icon.svg.png")}
        />

        <img
          className={classes.techimg}
          alt="vue"
          src={require("./ImagesCombo/vue.png")}
        />

        <img
          className={classes.techimg}
          alt="html"
          src={require("./ImagesCombo/html5-logo.png")}
        />

        <img
          className={classes.techimg}
          alt="css"
          src={require("./ImagesCombo/CSS3_logo.svg.png")}
        />

        <img
          className={classes.techimg}
          alt="python"
          src={require("./ImagesCombo/Python-Logo-Free-Download-PNG.png")}
        />

        <img
          className={classes.techimg}
          alt="docker"
          src={require("./ImagesCombo/docker.webp")}
        />

        <img
          className={classes.techimg}
          alt="graphql"
          src={require("./ImagesCombo/graphql.png")}
        />

        <img
          className={classes.techimg}
          alt="aws"
          src={require("./ImagesCombo/aws.png")}
        />
      </div>
    </div>
  );
};

export default TechHead;
