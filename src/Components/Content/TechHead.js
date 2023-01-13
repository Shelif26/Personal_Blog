import classes from "./TechHead.module.css";

const TechHead = () => {
  return (
    <div className={classes.techContainer}>
      <h2 className={classes.techHeading}>Technical Skills</h2>
      <div className={classes.techContainerChild}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />

        <img src="https://rafaelcaeta.github.io/Portfolio-Website/img/html5-logo.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" />

        <img src="https://www.pngall.com/wp-content/uploads/2016/05/Python-Logo-Free-Download-PNG.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
      </div>
    </div>
  );
};

export default TechHead;
