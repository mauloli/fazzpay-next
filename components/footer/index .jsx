import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={`${styles.footerContainer}`}>
      <div className=" d-flex container justify-content-between">
        <div className=" ms-1">
          <span>2020 Zwallet. All right reserved.</span>
        </div>
        <div className=" me-4   ">
          <span className=" me-3">+62 563788829901</span>
          <span>contact@zwallet.com</span>
        </div>
      </div>
    </div>
  );
}
