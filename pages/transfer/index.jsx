import React from "react";
import styles from "./Transfer.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer/index ";
import Menu from "../../components/menu";
import MainLayout from "../../components/Layout/main";
export default function Transfer() {
  const dummyData = [
    { name: "samue", status: "accept", total: 500000 },
    { name: "Netflix", status: "transfer", total: 500000 },
    { name: "Cristine", status: "accept", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
  ];
  return (
    <MainLayout>
      <div className={styles.mainContainer}>
        <div className=" d-flex flex-column m-5">
          <span>Search Receiver</span>
          <input type="text" />
          {dummyData.map((item, index) => (
            <div className={styles.containerUser}>
              <img src="../../user1.png" style={{ width: "50px" }} alt="" />
              <div className=" d-flex flex-column ms-3">
                <span>Samuel Suhi</span>
                <span>0818248228</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
    // <div style={{ backgroundColor: "#FAFCFF" }}>
    //   <Navbar />
    //   <div className=" container d-flex pt-5 pb-5" style={{ height: "700px" }}>
    //     <div className={styles.menuContainer}>
    //       <Menu />
    //     </div>
    //     <div className={styles.mainContainer}>
    //       <div className=" d-flex flex-column m-5">
    //         <span>Search Receiver</span>
    //         <input type="text" />
    //         {dummyData.map((item, index) => (
    //           <div className={styles.containerUser}>
    //             <img src="../../user1.png" style={{ width: "50px" }} alt="" />
    //             <div className=" d-flex flex-column ms-3">
    //               <span>Samuel Suhi</span>
    //               <span>0818248228</span>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
}
