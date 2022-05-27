import React from "react";
import MainLayout from "../../components/Layout/main";
import styles from "./Confirmation.module.css";

export default function Confirmation() {
  return (
    <MainLayout>
      <div className={`m-4 ${styles.mainContainer}`}>
        <span>Transfer To</span>
        <div className={`d-flex align-items-center ${styles.borderUser}`}>
          <img src="../../user1.png" style={{ width: "50px" }} alt="" />
          <div className=" d-flex flex-column ms-3">
            <span className=" mb-1">Samuel Sushi</span>
            <span>08367467326</span>
          </div>
        </div>
        <span> Details</span>
        <div className={styles.border}>
          <span>Ammount</span>
          <span>Rp 100.000</span>
        </div>
        <div className={styles.border}>
          <span>Balance Left</span>
          <span>Rp 20.000</span>
        </div>
        <div className={styles.border}>
          <span>Day And Time</span>
          <span>May 11, 2020 - 12.20</span>
        </div>
        <div className={styles.border}>
          <span>Notes</span>
          <span>For buying Some Socks</span>
        </div>
        <div className=" d-flex justify-content-end mt-4 me-2">
          <button>Continue</button>
        </div>
      </div>
    </MainLayout>
  );
}
