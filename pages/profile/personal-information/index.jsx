import React from "react";
import styles from "./Personal.module.css";
import MainLayout from "../../../components/Layout/main";
export default function index() {
  return (
    <MainLayout>
      <div className=" m-4">
        <div className=" d-flex flex-column">
          <span>Personal Inofrmation</span>
          <span
            className=" mt-xl-4"
            style={{ width: "350px", fontSize: "14px", color: "#7A7886" }}
          >
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </span>
        </div>
        <div className={styles.inputBorder}>
          <span>Firstname</span>
          <span>Robert</span>
        </div>
        <div className={styles.inputBorder}>
          <span>Firstname</span>
          <span>Robert</span>
        </div>
        <div className={styles.inputBorder}>
          <span>Firstname</span>
          <span>Robert</span>
        </div>
        <div className={styles.inputBorder}>
          <span>Firstname</span>
          <span>Robert</span>
        </div>
      </div>
    </MainLayout>
  );
}
