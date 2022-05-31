import React, { useEffect, useState } from "react";
import styles from "./Personal.module.css";
import MainLayout from "../../../components/Layout/main";
import Cookies from "js-cookie";
import cookies from "next-cookies";
import axios from "../../../utils/axios";
import Router from "next/router";
export default function PersonalInformation() {
  const id = Cookies.get("id");
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [updated, setUpdated] = useState(false);
  const [alert, setAlert] = useState(false);
  const dataUser = async () => {
    try {
      const result = await axios.get(`/user/profile/${id}`);
      console.log(result);
      setUser(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    dataUser();
  }, []);
  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    user.noTelp == null ? setPhoneNumber("---") : setPhoneNumber(user.noTelp);
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstName: firstName,
        lastName: lastName,
        noTelp: phoneNumber,
      };
      const result = await axios.patch(`user/profile/${id}`, data);
      console.log(result);
      setUpdated(true);
      dataUser();
      setAlert(true);
      setTimeout(function () {
        setAlert(false);
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <MainLayout>
      <div
        className={`alert alert-primary ${styles.alert} ${
          alert ? styles.fadeIn : styles.fadeOut
        }`}
        role="alert"
      >
        Succes Update Profile!
      </div>
      <div className=" m-4">
        <div className=" d-flex flex-column">
          <span>Personal Inofrmation</span>
        </div>
        <div className={styles.inputBorder}>
          <span>First Name</span>
          {/* <span>{user.firstName}</span> */}
          <input
            className={styles.input}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.inputBorder}>
          <span>Last Name</span>
          <input
            className={styles.input}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.inputBorder}>
          <span>Verified Email</span>
          <span style={{ color: "gray" }}>{user.email}</span>
        </div>
        <div className={styles.inputBorder}>
          <span>Phone Number</span>
          <div className=" d-flex justify-content-between ">
            <input
              className={styles.input}
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className=" d-flex justify-content-end mt-5">
          <form action="" onSubmit={handleSubmit}>
            {!updated ? (
              <button type="submit" className={styles.buttonConfirm}>
                Confrim
              </button>
            ) : (
              <button
                type="button"
                className={styles.buttonConfirm}
                onClick={() => Router.push("/home")}
              >
                Back To Home
              </button>
            )}
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
