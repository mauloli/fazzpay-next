import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../components/Layout/main";
import styles from "./Confirmation.module.css";
import ModalConfirmation from "../../components/modal";
export default function Confirmation() {
  const [modalShow, setModalShow] = useState(false);
  const data = useSelector((state) => state.dataTransfer.data);
  const transfer = {
    receiverId: data.user.id,
    amount: data.total,
    notes: data.note,
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dect",
  ];
  const date = new Date();
  const today = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}.${date.getMinutes()}`;
  const balance = useSelector((state) => state.balance.data);
  const ammount = parseInt(data.total);
  const fullName = `${data.user.firstName} ${data.user.lastName}`;
  const balanceLeft = balance - ammount;
  return (
    <MainLayout data="transfer">
      <ModalConfirmation
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={transfer}
      />
      <div className={`m-4 ${styles.mainContainer}`}>
        <span>Transfer To</span>
        <div className={`d-flex align-items-center ${styles.borderUser}`}>
          <img src="../../user1.png" style={{ width: "50px" }} alt="" />
          <div className=" d-flex flex-column ms-3">
            <span className=" mb-1">{fullName}</span>
            <span>08367467326</span>
          </div>
        </div>
        <span> Details</span>
        <div className={styles.border}>
          <span>Ammount</span>
          <span>Rp. {data.total}</span>
        </div>
        <div className={styles.border}>
          <span>Balance Left</span>
          <span>Rp. {balanceLeft}</span>
        </div>
        <div className={styles.border}>
          <span>Day And Time</span>
          <span>{today}</span>
        </div>
        <div className={styles.border}>
          <span>Notes</span>
          <span>{data.note}</span>
        </div>
        <div className=" d-flex justify-content-end mt-4 me-2">
          <button
            className={styles.buttonContinue}
            onClick={() => setModalShow(true)}
          >
            Continue
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
