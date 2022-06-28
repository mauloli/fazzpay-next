import React, { useState } from "react";
import styles from "./Reset.module.css";
import Banner from "../../components/banner/banner";
import { useRouter } from "next/router";
import Router from "next/router";
import axios from "../../utils/axios";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
export default function ResetPassword() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  const handleSubmit = async () => {
    const setData = {
      keysChangePassword: router.query.keys,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    try {
      const result = await axios.patch(`/auth/reset-password`, setData);
      console.log(result);
      setTextAlert(result.data.msg);
      setAlert(true);
      setSuccess(true);
      setTimeout(function () {
        setAlert(false);
      }, 3000);
    } catch (error) {
      setAlert(true);
      setTextAlert(error.response.data.msg);
      if (error.response.data.msg.includes("repeat")) {
        setTimeout(function () {
          Router.push("/reset-password");
        }, 3000);
      } else {
        setTimeout(function () {
          setAlert(false);
        }, 3000);
      }
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
            <IoLockClosedOutline />
            <input
              type="password"
              placeholder="Create New Password"
              style={{
                border: 0,
                outline: 0,
                borderBottom: "2px solid #A9A9A9",
              }}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <IoEyeOffOutline />
          </div>
          <div className={styles.formEmail}>
            <IoLockClosedOutline />
            <input
              type="password"
              placeholder="Confirm New Password"
              style={{
                border: 0,
                outline: 0,
                borderBottom: "2px solid #A9A9A9",
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <IoEyeOffOutline />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}></div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonConfirm}
              onClick={() => (success ? Router.push("/login") : handleSubmit())}
            >
              {success ? "Go to login page" : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
