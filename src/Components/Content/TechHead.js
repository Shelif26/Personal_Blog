import classes from "./TechHead.module.css";

const TechHead = () => {
  return (
    <div className={classes.techContainer}>
      <h2 className={classes.techHeading}>Technical Skills</h2>
      <div className={classes.techContainerChild}>
        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />

        <img src="https://rafaelcaeta.github.io/Portfolio-Website/img/html5-logo.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" />

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3Z2LrsdYaYdqkpai9MhgaJr40L4_zYNnvnxEnj3GLdX4AzT-vqs5EtseIgagfO_yr_A&usqp=CAU" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" />

        <img src="https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png" />
      </div>
    </div>
  );
};

export default TechHead;
