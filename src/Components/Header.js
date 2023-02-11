import classes from "./Header.module.css";
import Description from "./UI/Description";
import TechHead from "./Content/TechHead";
import About from "./UI/About";
import TechnicalSkill from "./Content/TechnicalSkill";
import { motion } from "framer-motion";

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
        <div className={classes.cchild}>
          <div className={classes.child1}>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Shelif
            </motion.h1>
          </div>
          <div className={classes.Mchild}>
            <h4>I design the Web</h4>
            <h4>& User Interfaces</h4>
            <Description />
            <div>
              <p className={classes.apps}>Apps that I'm using daily</p>
              <div className={classes.logodiv}>
                <img
                  className={classes.logo}
                  src="https://daily-now-res.cloudinary.com/image/upload/v1614088267/landing/Daily.dev_logo.png"
                />
                <img
                  className={classes.logo}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
                />
                <img
                  className={classes.logo}
                  src="https://play-lh.googleusercontent.com/Su39nteYoXMdmmWupitzo9XKZhZnstj2ObmJOR6S-wWCgSnF6USw3Weo7bcDL4RRv79G"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.M2child}>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            alt="phone"
            className={classes.imagepic}
            src={require("./Content/ImagesCombo/phone.png")}
          />
        </div>
      </div>
      <About />
      <TechnicalSkill />
      {/* <hr className={classes.techhr} /> */}
      <TechHead />
    </>
  );
};

export default Header;
