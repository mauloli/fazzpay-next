import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../stores/action/balance";
import MainLayout from "../../components/Layout/main";
import styles from "./Confirmation.module.css";
import ModalConfirmation from "../../components/modal";
import Cookies from "js-cookie";
import axios from "../../utils/axios";
import Router from "next/router";
export default function Confirmation() {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [statusTransfer, setStatusTransfer] = useState("false");
  const [buttonSucces, setButtonSucces] = useState(false);
  const [transferId, setTransferId] = useState("");
  const data = useSelector((state) => state.dataTransfer.data);
  const handleClick = (data) => {
    if (data.status == 200) {
      setStatusTransfer("success");
      setButtonSucces(true);
    } else {
      setStatusTransfer("failed");
    }
  };
  const handleIdTransfer = (id) => {
    setTransferId(id);
  };
  const downloadPdf = async () => {
    console.log(transferId);
    try {
      const result = await axios.get(`/export/transaction/${transferId}`);
      const redirectUrl = result.data.data.url;
      window.open(`${redirectUrl}`, "_blank");
    } catch (error) {
      console.log(error.response);
    }
  };
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
  useEffect(() => {
    if (statusTransfer === "success") {
      getBalanceUser();
      setTimeout(function () {
        setStatusTransfer("");
      }, 3000);
    }
  }, [statusTransfer]);
  const getBalanceUser = async () => {
    const userId = Cookies.get(`id`);
    try {
      const result = await axios.get(`/user/profile/${userId}`);
      await dispatch(getBalance(result.data.data.balance));
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(transferId);
  return (
    <MainLayout data="transfer">
      <div
        className={`alert alert-info position-absolute w-50 ${
          statusTransfer === "success" ? styles.fadeIn : styles.fadeOut
        }`}
        style={{ left: "30%", top: "30%" }}
        role="alert"
      >
        <div className=" d-flex justify-content-center">
          <div>
            <h4 className="alert-heading">Well done!</h4>
            <span>Transfer Success</span>
          </div>
        </div>
      </div>
      <ModalConfirmation
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={transfer}
        handleStatus={handleClick}
        handleIdTransfer={handleIdTransfer}
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
          {buttonSucces !== true ? (
            <button
              className={styles.buttonContinue}
              onClick={() => setModalShow(true)}
            >
              Continue
            </button>
          ) : (
            <div>
              <button
                className={styles.buttonContinue}
                onClick={() => downloadPdf()}
              >
                Download Pdf
              </button>
              <button
                className={styles.buttonContinue}
                onClick={() => Router.push("/home")}
              >
                Back To Home
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
