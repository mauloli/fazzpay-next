import React, { useState } from "react";
import styles from "./Menu.module.css";
import Router from "next/router";
import Cookies from "js-cookie";
import axios from "../../utils/axios";
import logout from "../logout";
import {
  IoAppsOutline,
  IoArrowUp,
  IoAddSharp,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import MyVerticallyCenteredModal from "../modalTopUp";

export default function Menu(props) {
  const handleLogout = async () => {
    logout();
  };
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={`${styles.mainDashboard}`}>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className={`atas`}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => Router.push("/home")}
          className={`${styles.dashboardMenu} ${
            props.data == "home" ? styles.select : ""
          }`}
        >
          <IoAppsOutline />
          <span>Dashboard</span>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => Router.push("/transfer")}
          className={`${styles.dashboardMenu} ${
            props.data == "transfer" ? styles.select : ""
          }`}
        >
          <IoArrowUp />
          <span>Transfer</span>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setModalShow(true)}
          className={`${styles.dashboardMenu} ${
            props.data == "topup" ? styles.select : ""
          }`}
        >
          <IoAddSharp />
          <span>Top up</span>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => Router.push("/profile")}
          className={`${styles.dashboardMenu} ${
            props.data == "profile" ? styles.select : ""
          }`}
        >
          <IoPersonOutline />
          <span>Profile</span>
        </div>
      </div>
      <div className={`bawah`}>
        <div
          className={styles.dashboardMenu}
          onClick={() => handleLogout()}
          style={{ cursor: "pointer" }}
        >
          <IoLogOutOutline />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
