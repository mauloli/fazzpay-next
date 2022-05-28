import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { IoNotificationsOutline } from "react-icons/io5";
export default function Navbar() {
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
          Navbar
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex align-items-xl-center flex-xl-row flex-column ">
            <div className="nav-link dropdown-toggle">
              <img src="../../user1.png" alt="" style={{ width: "50px" }} />
            </div>

            <div className=" d-flex flex-column me-3 ms-3">
              <span>Robert Chandler</span>
              <span>+6281393877</span>
            </div>
            <IoNotificationsOutline size={30} />
          </form>
        </div>
      </div>
    </nav>
  );
}
