import React, { useState } from "react";
import styles from "./Reset.module.css";
import Banner from "../../components/banner/banner";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import Router from "next/router";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
export default function ResetPassword() {
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    const data = {
      email: email,
      linkDirect: "http://localhost:3000/reset-password",
    };
    try {
      const result = await axios.post(`auth/forgot-password`, data);
      setAlert(true);
      setTextAlert(result.data.msg);
      setTimeout(function () {
        setAlert(false);
      }, 3000);
      setTimeout(function () {
        Router.push("/login");
      }, 4000);

      console.log(result);
    } catch (error) {
      setTextAlert(error.response.data.msg);
      setAlert(true);
      setTimeout(function () {
        setAlert(false);
      }, 3000);
      console.log(error.response);
    }
  };
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
          <div
            className={`alert ${
              textAlert.includes("not") ? "alert-danger" : "alert-primary"
            }  ${alert ? styles.fadeIn : styles.fadeOut}`}
            role="alert"
          >
            {textAlert}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}></div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonConfirm}
              onClick={() => handleSubmit()}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
