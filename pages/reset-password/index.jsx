import React from "react";
import styles from "./Reset.module.css";
import Banner from "../../components/banner/Banner";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
export default function ResetPassword() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Banner />
      </div>
      <div className={styles.formContainer} style={{ flex: 1 }}>
        <div className={styles.mainForm}>
          <div className={`${styles.formTextHeader}`}>
            <span style={{ fontSize: "24px" }}>
              Did You Forgot Your Password? Don’t Worry, You Can Reset Your
              Password In a Minutes.
            </span>
          </div>

          <div className={styles.formTextBody}>
            <span>
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </span>
          </div>
          <div className={styles.formEmail}>
            <IoMailOutline />
            <input
              type="email"
              placeholder="Enter Your Email"
              style={{
                border: 0,
                outline: 0,
                borderBottom: "2px solid #A9A9A9",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}></div>

          <div className={styles.buttonContainer}>
            <button className={styles.buttonConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
