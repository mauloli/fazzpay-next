import React from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import Banner from "../../components/banner/Banner";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
export default function Login() {
  return (
    <div className={styles.login}>
      <div style={{ flex: 1 }}>
        <Banner />
      </div>

      <div className={styles.formContainer} style={{ flex: 1 }}>
        <div className={styles.mainForm}>
          <div className={`${styles.formTextHeader}`}>
            <span style={{ fontSize: "24px" }}>
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </span>
          </div>

          <div className={styles.formTextBody}>
            <span>
              Transfering money is eassier than ever, you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
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
          <div className={styles.formPassword}>
            <IoLockClosedOutline />
            <input
              type="password"
              placeholder="Enter Your Password"
              style={{
                border: 0,
                outline: 0,
                borderBottom: "2px solid #A9A9A9",
              }}
            />
            <IoEyeOffOutline style={{ position: "absolute", right: "15%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}></div>
          <div className={styles.textForgot}>
            <span>Forgot Password</span>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonLogin}>Login</button>
          </div>

          <span style={{ display: "flex", justifyContent: "center" }}>
            Dont have an acccount? <Link href={"/register"}>Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
