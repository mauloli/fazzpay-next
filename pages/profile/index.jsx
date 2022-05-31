import React from "react";
import MainLayout from "../../components/Layout/main";
import { useRouter } from "next/router";
import styles from "./Profile.module.css";
import { IoArrowForwardOutline, IoPencil } from "react-icons/io5";
import Router from "next/router";

export default function Profile() {
  const router = useRouter();
  return (
    <MainLayout data="profile">
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
            <button
              className=" d-flex align-items-center justify-content-between"
              onClick={() =>
                Router.push(`${router.asPath}/personal-information`)
              }
            >
              <span>Personal Information</span>
              <IoArrowForwardOutline />
            </button>
            <button
              className=" d-flex align-items-center justify-content-between"
              onClick={() => Router.push(`${router.asPath}/change-password`)}
            >
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
