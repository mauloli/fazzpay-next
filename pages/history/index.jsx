import React from "react";
import styles from "./History.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer/index ";
import Menu from "../../components/menu";
import MainLayout from "../../components/Layout/main";
export default function History() {
  const dummyData = [
    { name: "samue", status: "accept", total: 500000 },
    { name: "Netflix", status: "transfer", total: 500000 },
    { name: "Cristine", status: "accept", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
  ];
  return (
    <MainLayout>
      <div className={styles.mainContainer}>
        <div className=" mx-5 m-3 d-flex justify-content-between">
          <span>Transation History</span>
          <select name="" id="">
            <option value="">test</option>
            <option value="">Test</option>
          </select>
        </div>
        {dummyData.map((item, index) => (
          <div className=" mx-5 d-flex justify-content-between align-items-center m-3">
            <div className=" d-flex align-items-center">
              <img src="../../user1.png" style={{ width: "50px" }} alt="" />
              <div className=" d-flex flex-column ms-2">
                <span>{"test"}</span>
                <span>{"item.status"}</span>
              </div>
            </div>
            <span>+Rp {"item.total"}</span>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
