import classes from "./Achievements.module.css";
import { ImageSlider } from "./ImagesCombo/ImageSlider";
import { Finearts } from "./ImagesCombo/ImageSlider";

const Achievements = () => {
  return (
    <>
      {/* <--------------------------------------------nss--------------------------------------------> */}

      <div className={classes.AchievementsContainer}>
        <h2 className={classes.heading}>Achievements</h2>
        <div className={classes.AchievementsContainerchild}>
          <h3 className={classes.nss}>NSS : National Service Scheme</h3>
          <p className={classes.AwardDescription}>
            Awarded with Best NSS volunteer-2022 award by Anna university,
            Chennai
          </p>
        </div>
        <div className={classes.imgSlider}>
          <ImageSlider />
        </div>

        {/* <------------------------------------FINE ARTS -----------------------------------------------> */}

        <div className={classes.AchievementsContainerchild}>
          <h3 className={classes.nss}>Fine Arts</h3>
          <p className={classes.AwardDescription}>
            Awarded with Best NSS volunteer-2022 award by Anna university,
            Chennai
          </p>
        </div>
        <div className={classes.imgSlider}>
          <Finearts />
        </div>
      </div>
    </>
  );
};

export default Achievements;
