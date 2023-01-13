import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.ContactContainer}>
      <a href="mailto:shelifshelif30@gmail.com?subject=description">
        <i class="fa-sharp fa-solid fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/m-a-shelif-09446b167/">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/Shelif26"><i class="fa-brands fa-github"></i></a>
      <a href="https://instagram.com/__shelif__?igshid=YmMyMTA2M2Y=">
        <i class="fa-brands fa-square-instagram"></i>
      </a>
      <a href="https://www.facebook.com/shelifshelif.shelif?mibextid=ZbWKwL">
        <i class="fa-brands fa-facebook"></i>
      </a>
    </div>
  );
};

export default Contact;
