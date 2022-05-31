import React from "react";
import Router from "next/router";
import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";
import styles from "./Transfer.module.css";
import { getDataTransfer } from "../../stores/action/dataTransfer";
import { IoPencilOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/Layout/main";
import { useDispatch, useSelector } from "react-redux";

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function UserId() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.user).data;
  const balance = useSelector((state) => state.balance);
  const [money, setMoney] = useState();
  const [note, setNote] = useState("");
  const router = useRouter();
  const selectUser = allUser.filter(
    (item) => item.id == router.query.userId
  )[0];
  const handleClick = async () => {
    try {
      const dataTransfer = {
        user: selectUser,
        total: money,
        note: note,
      };
      await dispatch(getDataTransfer(dataTransfer));
      Router.push("/confirmation");
    } catch (error) {
      console.log(error.response);
    }
  };
  const currency = new Intl.NumberFormat("id-ID", {
    // style: "currency",
    currency: "IDR",
  });
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
            <span className=" mb-2">{`${selectUser.firstName} ${selectUser.lastName}`}</span>
            <span>{selectUser.noTelp ? selectUser.noTelp : "----"}</span>
          </div>
        </div>
        <div className=" h-75 d-flex justify-content-center">
          <div className=" d-flex flex-column justify-content-center">
            <input
              className={styles.inputMoney}
              type="number"
              placeholder="0.00"
              onChange={(e) => setMoney(e.target.value)}
              value={money}
            />
            <span className=" text-center my-5">
              Rp {currency.format(balance.data)} Available
            </span>
            <div className=" d-flex flex-column align-items-center">
              <IoPencilOutline
                className={styles.pencil}
                size={20}
                color={note.length > 0 ? "blue" : ""}
              />
              <input
                className={styles.inputNote}
                type="text"
                placeholder="Add Some Notes"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-end">
          <button
            style={{
              backgroundColor: "#6379F4",
              border: 0,
              color: "white",
              width: "150px",
              height: "40px",
              borderRadius: "10px",
            }}
            onClick={() => handleClick()}
          >
            Continue
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
