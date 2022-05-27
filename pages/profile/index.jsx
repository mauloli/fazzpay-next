import React from "react";
import MainLayout from "../../components/Layout/main";
import styles from "./Profile.module.css";
import { IoArrowForwardOutline, IoPencil } from "react-icons/io5";

export default function Profile() {
  return (
    <MainLayout>
      <div className=" w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <div
          className={`d-flex flex-column align-items-center ${styles.userContainer}`}
        >
          <img
            className=" mb-3"
            src="../../user1.png"
            style={{ width: "50px" }}
            alt=""
          />
          <div>
            <IoPencil size={12} />
            <span className=" ms-1">Edit</span>
          </div>

          <span>Robert</span>
          <span>278328</span>
        </div>
        <div className={`d-flex flex-column ${styles.containerInput}`}>
          <div>
            <button className=" d-flex align-items-center justify-content-between">
              <span>Personal Information</span>
              <IoArrowForwardOutline />
            </button>
            <button className=" d-flex align-items-center justify-content-between">
              <span>Change Password</span>
              <IoArrowForwardOutline />
            </button>
            <button className=" d-flex align-items-center justify-content-between">
              <span>Change Pin</span>
              <IoArrowForwardOutline />
            </button>
            <button className=" d-flex align-items-center justify-content-between">
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
