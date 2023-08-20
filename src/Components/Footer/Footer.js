// import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <>
    <div className={styles.footerContainer}>
      <div className={styles.footerComp}>
        <h3>Company</h3>
        <div >
          <p>About Us</p>
          <p>Careers</p>
        </div>
        <div className={styles.alignCnter}>
          <p>© 2023 SRAT. All Rights Reserved.</p>
          <p>
            <span>Terms of Use </span>
            <span>Privacy Policy </span> <span>FAQ</span>
          </p>
        </div>
      </div>
      <div className={styles.footerComp}>
        <h3>View Website in</h3>
        <div className={styles.alignCnter}>
          <span>
            <p>✔ </p>
            <p>English</p>
          </span>
        </div>
      </div>
      <div className={styles.footerComp}>
        <h3>Need Help?</h3>
        <div className={styles.alignCnter}>
          <p>Visit Our Help Center</p>
          <p>Share Your Feedback</p>
        </div>
      </div>
      <div className={styles.footerComp}>
        <h3> Connect with Us</h3>
        <div className={styles.footerImg}>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.cdnlogo.com/logos/t/96/twitter-icon.svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.footerapp}>
          <div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div> <p style={{fontSize:"1rem"}}>Made with <span style={{color:"red",padding:"0px"}}>❤</span>love and passion by <a href="https://www.linkedin.com/in/ashish-biswas/" target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"green",fontWeight:"bold", cursor:"pointer"}}>Ashish</a></p></div>
    </>
  );
};
export default Footer;
