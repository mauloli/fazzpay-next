import React from "react";
import styles from "./Menu.module.css";
import {
  IoAppsOutline,
  IoArrowUp,
  IoAddSharp,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";
export default function Menu() {
  return (
    <div className={`${styles.mainDashboard}`}>
      <div className={`atas`}>
        <div className={styles.dashboardMenu}>
          <IoAppsOutline />
          <span>Dashboard</span>
        </div>
        <div className={styles.dashboardMenu}>
          <IoArrowUp />
          <span>Transfer</span>
        </div>
        <div className={styles.dashboardMenu}>
          <IoAddSharp />
          <span>Top up</span>
        </div>
        <div className={styles.dashboardMenu}>
          <IoPersonOutline />
          <span>Local</span>
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
