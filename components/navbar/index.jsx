import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
export default function Navbar() {
  const user = useSelector((state) => state.userLogin);
  console.log(user);
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };

  return (
    // <div className="d-flex align-items-center" style={{ height: "100px" }}>

    <nav
      className={`navbar navbar-expand-lg navbar-light  ${styles.navContainer} w-100 `}
    >
      <div className="container-fluid container pe-3">
        <a className="navbar-brand" href="#">
          FazzPay
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex align-items-xl-center flex-xl-row flex-column ">
            <div className="nav-link ">
              <img src="../../user1.png" alt="" style={{ width: "50px" }} />
            </div>

            <div className=" d-flex flex-column me-3 ms-3">
              <span>{user.data.firstName + " " + user.data.lastName}</span>
              <span>{user.data.noTelp}</span>
            </div>
            <IoNotificationsOutline size={30} />
          </form>
        </div>
      </div>
    </nav>
  );
}
