import React from "react";
import styles from "./Main.module.css";
import Navbar from "../navbar";
import Footer from "../footer/index ";
import Menu from "../menu";
export default function MainLayout(props) {
  return (
    <div style={{ backgroundColor: "#FAFCFF" }}>
      <Navbar />
      <main className={`d-flex container pt-5 mb-5  ${styles.main}`}>
        <div className={styles.containerMenu}>
          <Menu data={props.data} />
        </div>
        <div className={styles.mainContainer}>{props.children}</div>
      </main>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}
