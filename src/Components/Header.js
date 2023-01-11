import classes from "./Header.module.css";
import Description from "./UI/Description";
import Contact from "./UI/Contact";
import TechHead from "./Content/TechHead";
import TechnicalSkill from "./Content/TechnicalSkill";
import Education from "./Content/Education";

const Header = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className={classes.Headcontainer}>
        <div className={classes.child1}>
          <h1>Hello I'm Shelif</h1>
          <h4>Developer</h4>
        </div>
      </div>

      <div className={classes.Contact}>
        <Description />

        <div className={classes.image}>
          <img
            className={classes.imagepic}
            src="https://icon-library.com/images/icon-of-a-person/icon-of-a-person-7.jpg "
          />
        </div>
      </div>
      <TechHead />
      <TechnicalSkill />
      <Education />
    </>
  );
};

export default Header;
