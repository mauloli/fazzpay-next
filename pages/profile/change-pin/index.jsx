import React from "react";
import MainLayout from "../../../components/Layout/main";
import styles from "./Pin.module.css";
export default function ChangePin() {
  return (
    <MainLayout>
      <div className=" m-4 h-100">
        <div className="">
          <div className=" d-flex flex-column">
            <span>Change Pin</span>
            <span style={{ width: "344px" }}>
              Enter your current 6 digits Zwallet PIN below to continue to the
              next steps.
            </span>
          </div>
        </div>
        <div className={styles.inputBorder}>
          <div className={`${styles.inputContainer} m-5`}>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          </div>
          <div className={styles.buttonContainer}>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
