import React from "react";
import Router from "next/router";
import styles from "./Transfer.module.css";
import { IoSearchOutline } from "react-icons/io5";

import { useRouter } from "next/router";
import MainLayout from "../../components/Layout/main";
export default function UserId() {
  const router = useRouter();
  console.log(router.query);
  return (
    <MainLayout data="transfer">
      <div className=" m-5 h-75">
        <div>
          <span>Transfer Money</span>
        </div>
        <div className={styles.userBorder}>
          <div>
            <img src="../../user1.png" style={{ width: "50px" }} alt="" />
          </div>
          <div className=" d-flex flex-column ms-3">
            <span className=" mb-2">Name</span>
            <span>Number</span>
          </div>
        </div>
        <div className=" h-50 d-flex justify-content-center">
          <div className=" d-flex flex-column">
            <input
              className={styles.inputMoney}
              type="text"
              placeholder="0.00"
            />
            <span>Rp 12000Available</span>
            <input type="text" />
          </div>
        </div>
        <div className=" d-flex justify-content-end">
          <button>Continue</button>
        </div>
      </div>
    </MainLayout>
  );
}
