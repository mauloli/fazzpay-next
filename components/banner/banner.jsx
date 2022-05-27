import React from "react";
import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <div
      className={`${styles.bannerContainer} `}
      style={{ backgroundColor: "#6379F4", height: "100%" }}
    >
      <div className={styles.mainContainer}>
        <div className={`${styles.textHeader}`}>
          <span style={{ fontSize: "29px", color: "white" }}>FazzPay</span>
        </div>

        <div className={`${styles.imgContainer}`}>
          <img
            className={styles.imgBanner}
            src={"../banner.png"}
            alt="img image"
          />
          <img src="../line.png" alt="" className={styles.imgLine} />
        </div>

        <div className={styles.textDetails}>
          <span style={{ color: "white", fontSize: "24px" }}>
            App that Covering Banking Needs.
          </span>
          <span style={{ fontSize: "16px", color: "white" }}>
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </span>
        </div>
      </div>
    </div>
  );
}
