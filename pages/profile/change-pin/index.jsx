import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/Layout/main";
import styles from "./Pin.module.css";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
export default function ChangePin() {
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });
  const [fixPin, setFixPin] = useState({ pin: "" });
  const [newPin, setNewPin] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const handleChange = async (e) => {
    const { maxLength, value, name } = e.target;
    const [fildName, fildIndex] = name.split("-");
    await setPin({ ...pin, [`pin${fildIndex}`]: value });
    if (value.length == maxLength) {
      const nextInput = document.querySelector(
        `input[name=ssn-${parseInt(fildIndex, 10) + 1}]`
      );
      if (nextInput !== null) {
        nextInput.focus();
      }
    }
  };
  const emptyPin = () => {
    setPin({
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      pin6: "",
    });
  };
  const handleConfirm = async () => {
    if (!confirmed) {
      try {
        const result = await axios.get(`/user/pin?pin=${fixPin.pin}`);
        console.log(result);
        setConfirmed(true);
        emptyPin();
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.msg);
      }
    } else {
      try {
        const result = await axios.patch(
          `user/pin/${Cookies.get("id")}`,
          fixPin
        );
        alert(result.data.msg);
        emptyPin();
        setConfirmed(false);
        console.log(result);
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.msg);
      }
    }
  };
  const handleUpdate = async () => {
    const result = await axios.patch(`/user/pin/${Cookies.get("id")}`);
  };
  useEffect(() => {
    // console.log(pin);
    if (Object.keys(pin).length == 6) {
      const newPinn =
        pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
      setFixPin({ pin: newPinn });
    }
  }, [pin]);
  console.log(fixPin);
  return (
    <MainLayout>
      <div className=" m-4 h-100">
        <div className="">
          <div className=" d-flex flex-column">
            <span className=" mb-4">Change Pin</span>
            <span style={{ width: "344px" }}>
              {!confirmed
                ? " Enter your current 6 digits Zwallet PIN below to continue to the next steps"
                : "Type your new 6 digits security PIN to use in Zwallet."}
            </span>
          </div>
        </div>
        <div className={styles.inputBorder}>
          <div className={`${styles.inputContainer} m-5`}>
            <input
              name="ssn-1"
              type="password"
              maxLength={1}
              id="1"
              onChange={handleChange}
              value={pin.pin1}
            />
            <input
              name="ssn-2"
              type="password"
              maxLength={1}
              id="2"
              onChange={handleChange}
              value={pin.pin2}
            />
            <input
              name="ssn-3"
              type="password"
              maxLength={1}
              id="3"
              onChange={handleChange}
              value={pin.pin3}
            />
            <input
              name="ssn-4"
              type="password"
              maxLength={1}
              id="4"
              onChange={handleChange}
              value={pin.pin4}
            />
            <input
              name="ssn-5"
              type="password"
              maxLength={1}
              id="5"
              onChange={handleChange}
              value={pin.pin5}
            />
            <input
              name="ssn-6"
              type="password"
              maxLength={1}
              id="6"
              onChange={handleChange}
              value={pin.pin6}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => handleConfirm()}>Continue</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
