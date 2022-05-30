import { Modal, Button } from "react-bootstrap";
import styles from "./Modal.module.css";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
function ModalConfirmation(props) {
  const [pin, setPin] = useState({});
  const [fixPin, setFixPin] = useState({ pin: "" });
  const [pinError, setPinError] = useState(false);
  const [status, setStatus] = useState("");
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
  useEffect(() => {
    // console.log(pin);
    if (Object.keys(pin).length == 6) {
      const newPinn =
        pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
      setFixPin({ pin: newPinn });
    }
  }, [pin]);
  useEffect(() => {
    if (pinError) {
      setTimeout(function () {
        setPinError(false);
      }, 2000);
    }
  }, [pinError]);
  const handleSubmit = async () => {
    try {
      const result = await axios.get(`/user/pin?pin=${fixPin.pin}`);
      if (result.data.status === 200) {
        try {
          const resultTf = await axios.post(
            `/transaction/transfer`,
            props.data
          );
          props.handleIdTransfer(resultTf.data.data.id);
          props.handleStatus(result.data);
          props.onHide();
          console.log(resultTf);
        } catch (error) {
          console.log(error.response);
        }
      }
    } catch (error) {
      setPinError(true);
      console.log(error.response);
    }
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <span className=" fw-bold">Enter Pin To Transfer</span>
      </Modal.Header>
      <Modal.Body>
        <div style={{ width: "306px", marginBottom: "30px" }}>
          <span className="" style={{ fontSize: "14px" }}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.{" "}
          </span>
        </div>

        <div
          className={`alert alert-danger ${
            pinError ? styles.fadeIn : styles.fadeOut
          } ${styles.alertContainer}`}
          role="alert"
        >
          Pin Is Incorrect! Please Enter again!!
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={() => handleSubmit()}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirmation;
