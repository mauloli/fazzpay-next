import React, { useState } from "react";
import MainLayout from "../../../components/Layout/main";
import { IoLockClosedOutline, IoEyeOffOutline } from "react-icons/io5";
import styles from "./Password.module.css";
import Cookies from "js-cookie";
import axios from "../../../utils/axios";
export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [statusError, setStatusError] = useState("");
  const [isError, setIsError] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  const handleSubmit = async () => {
    const id = Cookies.get("id");
    const data = {
      oldPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: repeatPassword,
    };
    try {
      const result = await axios.patch(`/user/password/${id}`, data);
      console.log(result);
      setAlert(true);
      setTextAlert(result.data.msg);

      setTimeout(function () {
        setCurrentPassword("");
        setNewPassword("");
        setRepeatPassword("");
        setAlert(false);
      }, 3000);
    } catch (error) {
      console.log(error.response);
      setAlert(true);
      setStatusError(error.response.data.msg);
      setTextAlert(error.response.data.msg);
      setIsError(true);
      setTimeout(function () {
        setAlert(false);
        setStatusError("");
        setIsError(false);
      }, 3000);
    }
  };
  return (
    <MainLayout data="profile">
      <div className=" m-4 d-flex flex-column h-100">
        <div className=" d-lg-flex flex-lg-column">
          <span className=" mb-5 fw-bold">Change Password</span>
          <span style={{ width: "342px" }}>
            You must enter your current password and then type your new password
            twice.
          </span>
        </div>

        <div className=" d-flex justify-content-center m-0">
          <div className={`d-flex flex-column ${styles.inputContainer}`}>
            <div
              className={`${
                textAlert.includes("Success") ? "alert-primary" : "alert-danger"
              } alert  text-center ${alert ? styles.fadeIn : styles.fadeOut}`}
              role="alert"
            >
              {textAlert}
            </div>
            <div className={statusError.includes("Wrong") ? styles.error : ""}>
              <IoLockClosedOutline
                color={
                  currentPassword.length < 1
                    ? ""
                    : statusError.includes("Wrong")
                    ? "red"
                    : "blue"
                }
                className={styles.lockIcon}
              />
              <input
                className={`${
                  currentPassword.length < 1 ? styles.input : styles.inputed
                } ${statusError.includes("Wrong") ? styles.inputError : ""}`}
                type="password"
                placeholder="Current Password"
                onChange={(e) => setCurrentPassword(e.target.value)}
                value={currentPassword}
              />
              <IoEyeOffOutline className={styles.eyeIcon} />
            </div>
            <div className={statusError.includes("same") ? styles.error : ""}>
              <IoLockClosedOutline
                color={
                  newPassword.length < 1
                    ? ""
                    : statusError.includes("same")
                    ? "red"
                    : "blue"
                }
                className={styles.lockIcon}
              />
              <input
                className={
                  newPassword.length < 1
                    ? styles.input
                    : statusError.includes("same")
                    ? styles.inputError
                    : styles.inputed
                }
                type="password"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
              <IoEyeOffOutline className={styles.eyeIcon} />
            </div>
            <div className={statusError.includes("same") ? styles.error : ""}>
              <IoLockClosedOutline
                color={
                  repeatPassword.length < 1
                    ? ""
                    : statusError.includes("same")
                    ? "red"
                    : "blue"
                }
                className={styles.lockIcon}
              />
              <input
                className={
                  repeatPassword.length < 1
                    ? styles.input
                    : statusError.includes("same")
                    ? styles.inputError
                    : styles.inputed
                }
                type="password"
                placeholder="Repeat New Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={repeatPassword}
              />
              <IoEyeOffOutline className={styles.eyeIcon} />
            </div>
            <div className=" w-100">
              <button
                className=" w-100 border-0 mt-4"
                style={{ height: "50px", borderRadius: "12px" }}
                disabled={
                  (currentPassword.length &&
                    newPassword.length &&
                    repeatPassword.length) < 1
                    ? true
                    : false
                }
                onClick={() => handleSubmit()}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
