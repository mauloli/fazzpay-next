import React from "react";
import styles from "./Menu.module.css";
import {
  IoAppsOutline,
  IoArrowUp,
  IoAddSharp,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";
export default function Menu(props) {
  return (
    <div className={`${styles.mainDashboard}`}>
      <div className={`atas`}>
        <div
          className={`${styles.dashboardMenu} ${
            props.data == "home" ? styles.select : ""
          }`}
        >
          <IoAppsOutline />
          <span>Dashboard</span>
        </div>
        <div
          className={`${styles.dashboardMenu} ${
            props.data == "transfer" ? styles.select : ""
          }`}
        >
          <IoArrowUp />
          <span>Transfer</span>
        </div>
        <div
          className={`${styles.dashboardMenu} ${
            props.data == "topup" ? styles.select : ""
          }`}
        >
          <IoAddSharp />
          <span>Top up</span>
        </div>
        <div
          className={`${styles.dashboardMenu} ${
            props.data == "profile" ? styles.select : ""
          }`}
        >
          <IoPersonOutline />
          <span>Profile</span>
        </div>
      </div>
      <div className={`bawah`}>
        <div className={styles.dashboardMenu}>
          <IoLogOutOutline />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
