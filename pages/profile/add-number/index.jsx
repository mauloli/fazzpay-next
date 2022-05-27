import React from "react";
import MainLayout from "../../../components/Layout/main";
import { IoCallOutline } from "react-icons/io5";
import styles from "./Phone.module.css";
export default function AddPhone() {
  return (
    <MainLayout>
      <div className=" m-4" style={{ height: "90%" }}>
        <div className=" h-100">
          <div className=" d-flex flex-column">
            <span>Add Phone Number</span>
            <span style={{ width: "342px", marginTop: "25px" }}>
              Add at least one phone number for the transfer ID so you can start
              transfering your money to another user.
            </span>
          </div>
          <div className=" h-75 d-flex flex-column justify-content-center align-items-center">
            <div
              className={`d-flex align-items-center ${styles.inputContainer}`}
            >
              <IoCallOutline className={styles.inputIcon} />
              <span className={styles.inputSpan}>+62</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className={styles.buttonContainer}>
              <button>Add Phone Number</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
