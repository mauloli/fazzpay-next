import axiosServer from "../../utils/axiosServer";
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import Banner from "../../components/banner/Banner";
import styles from "./Createpin.module.css";
import cookies from "next-cookies";
import Cookies from "js-cookie";
import Router from "next/router";

export default function CreatePin() {
  const [pin, setPin] = useState([]);
  const [fixPin, setFixPin] = useState({ pin: "" });
  const [updated, setUpdated] = useState(false);

  const handleChange = async (e) => {
    const { maxLength, value, name } = e.target;
    const [fildName, fildIndex] = name.split("-");
    await setPin([...pin, value]);
    if (value.length == maxLength) {
      const nextInput = document.querySelector(
        `input[name=ssn-${parseInt(fildIndex, 10) + 1}]`
      );
      if (nextInput !== null) {
        nextInput.focus();
      }
    }
  };
  const handleClick = async () => {
    try {
      const id = Cookies.get("id");
      console.log(id);
      const result = await axios.patch(`user/pin/${id}`, fixPin);
      alert(result.data.msg);
      if (result.data.status == 200) {
        setUpdated(true);
      }
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    // console.log(pin);
    if (pin.length == 6) {
      const newPinn = pin.join("");
      setFixPin({ pin: newPinn });
    }
  }, [pin]);
  console.log(fixPin);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Banner />
      </div>
      <div className={styles.formContainer} style={{ flex: 1 }}>
        <div className={styles.mainForm}>
          <div className={`${styles.formTextHeader}`}>
            {updated ? (
              <div>
                <div
                  className=" mb-3 d-flex justify-content-center position-absolute align-items-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "green",
                    top: "10%",
                    borderRadius: "50%",
                  }}
                >
                  <IoCheckmarkOutline color="white" size={40} />
                </div>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Your PIN Was Successfully Created
                </span>
              </div>
            ) : (
              <span style={{ fontSize: "24px" }}>
                Secure Your Account, Your Wallet, and Your Data With 6 Digits
                PIN That You Created Yourself.
              </span>
            )}
          </div>

          <div className={styles.formTextBody}>
            {updated ? (
              <span>
                Your PIN was successfully created and you can now access all the
                features in Zwallet. Login to your new account and start
                exploring!
              </span>
            ) : (
              <span>
                Create 6 digits pin to secure all your money and your data in
                Zwallet app. Keep it secret and don’t tell anyone about your
                Zwallet account password and the PIN.
              </span>
            )}
          </div>

          <div className={updated ? styles.buttonNone : styles.inputContainer}>
            <input
              name="ssn-1"
              type="password"
              maxLength={1}
              id="1"
              onChange={handleChange}
            />
            <input
              name="ssn-2"
              type="password"
              maxLength={1}
              id="2"
              onChange={handleChange}
            />
            <input
              name="ssn-3"
              type="password"
              maxLength={1}
              id="3"
              onChange={handleChange}
            />
            <input
              name="ssn-4"
              type="password"
              maxLength={1}
              id="4"
              onChange={handleChange}
            />
            <input
              name="ssn-5"
              type="password"
              maxLength={1}
              id="5"
              onChange={handleChange}
            />
            <input
              name="ssn-6"
              type="password"
              maxLength={1}
              id="6"
              onChange={handleChange}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}></div>

          <div className={styles.buttonContainer}>
            {updated ? (
              <button
                className={styles.buttonConfirmed}
                onClick={Router.push("/login")}
              >
                Login Now
              </button>
            ) : (
              <button
                disabled={pin.length < 6 ? true : false}
                className={
                  pin.length < 6 ? styles.buttonConfirm : styles.buttonConfirmed
                }
                onClick={handleClick}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
