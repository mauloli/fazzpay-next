import React from "react";
import MainLayout from "../../../components/Layout/main";
import { IoLockClosedOutline, IoEyeOffOutline } from "react-icons/io5";
import styles from "./Password.module.css";
export default function ChangePassword() {
  return (
    <MainLayout>
      <div className=" m-4 d-flex flex-column h-100">
        <div className=" d-lg-flex flex-lg-column">
          <span>Change Password</span>
          <span style={{ width: "342px" }}>
            You must enter your current password and then type your new password
            twice.
          </span>
        </div>
        <div className=" d-flex justify-content-center m-5">
          <div className={`d-flex flex-column ${styles.inputContainer}`}>
            <div>
              <IoLockClosedOutline color={``} className={styles.lockIcon} />
              <input type="text" placeholder="Current Password" />
              <IoEyeOffOutline className={styles.eyeIcon} />
            </div>
            <div>
              <IoLockClosedOutline className={styles.lockIcon} />
              <input type="text" placeholder="New Password" />
              <IoEyeOffOutline className={styles.eyeIcon} />
            </div>
            <div>
              <IoLockClosedOutline className={styles.lockIcon} />
              <input type="text" placeholder="Repeat New Password" />
              <IoEyeOffOutline className={styles.eyeIcon} />
            </div>
            <div className=" w-100">
              <button
                className=" w-100 border-0 mt-4"
                style={{ height: "50px", borderRadius: "12px" }}
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
