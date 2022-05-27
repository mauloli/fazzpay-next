import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import styles from "./Createpin.module.css";
export default function CreatePin() {
  const [pin, setPin] = useState([]);
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
  useEffect(() => {
    console.log(pin);
  }, [pin]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Banner />
      </div>
      <div className={styles.formContainer} style={{ flex: 1 }}>
        <div className={styles.mainForm}>
          <div className={`${styles.formTextHeader}`}>
            <span style={{ fontSize: "24px" }}>
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </span>
          </div>

          <div className={styles.formTextBody}>
            <span>
              Create 6 digits pin to secure all your money and your data in
              Zwallet app. Keep it secret and don’t tell anyone about your
              Zwallet account password and the PIN.
            </span>
          </div>
          <div className={styles.inputContainer}>
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
            <button
              disabled={pin.length < 6 ? true : false}
              className={styles.buttonConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
