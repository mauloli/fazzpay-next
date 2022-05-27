import React from "react";
import Navbar from "../../components/navbar";
import styles from "./Home.module.css";
import { IoArrowDownSharp, IoArrowUp, IoAddSharp } from "react-icons/io5";
import Menu from "../../components/menu";
import Footer from "../../components/footer/index ";

export default function Home() {
  const dummyData = [
    { name: "samue", status: "accept", total: 500000 },
    { name: "Netflix", status: "transfer", total: 500000 },
    { name: "Cristine", status: "accept", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
  ];
  return (
    <div>
      <Navbar />
      <div
        className={``}
        style={{ backgroundColor: "#FAFCFF", height: "100%" }}
      >
        <div className={`${styles.dashboardContainer} d-flex container`}>
          <div className={styles.menuContainer} style={{ flex: 1 }}>
            <Menu />
          </div>
          <div className={`${styles.transactionContainer}`}>
            <div className={`${styles.transactionTop}`}>
              <div className={`${styles.balanceLeft}`}>
                <span style={{ fontSize: "18px", color: "#E0E0E0" }}>
                  Balance
                </span>
                <span style={{ fontSize: "40px" }}>Rp120.000</span>
                <span style={{ fontSize: "14px" }}>093473270</span>
              </div>
              <div className={`${styles.balanceRight}`}>
                <button>
                  <IoArrowUp
                    size={25}
                    style={{ position: "relative", right: "20" }}
                  />
                  Transfer
                </button>
                <button>
                  <IoAddSharp
                    size={25}
                    style={{ position: "relative", right: "20" }}
                  />
                  Topup
                </button>
              </div>
            </div>
            <div className={`${styles.transactionBtm}`}>
              <div className={`${styles.transactionLeft}`}>
                <div className={styles.incomeTop}>
                  <div className={styles.incomeLeft}>
                    <IoArrowDownSharp style={{ color: "green" }} size={20} />
                    <span>Income</span>
                    <span>Rp2.000.000</span>
                  </div>
                  <div className={styles.incomeRight}>
                    <IoArrowUp style={{ color: "red" }} size={20} />
                    <span>Expense</span>
                    <span>Rp.1.560.000</span>
                  </div>
                </div>
                <div className={styles.incomeBtm}>
                  <div>Chart</div>
                  <div>
                    <span>saturday</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.transactionRight}`}>
                <div className=" d-flex justify-content-between w-100 ps-3 pe-3">
                  <span>Transaction History</span>
                  <span>See All</span>
                </div>
                {dummyData.map((item, index) => (
                  <div className=" d-flex justify-content-between align-items-center m-3">
                    <div className=" d-flex align-items-center">
                      <img
                        src="../../user1.png"
                        style={{ width: "50px" }}
                        alt=""
                      />
                      <div className=" d-flex flex-column ms-2">
                        <span>{item.name}</span>
                        <span>{item.status}</span>
                      </div>
                    </div>
                    <span>+Rp {item.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
