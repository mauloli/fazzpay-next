import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import styles from "./Modal.module.css";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  const dataCookies = Cookies.get("id");
  const [topup, setTopup] = useState({ amount: 0 });
  const handleSubmit = async () => {
    try {
      const result = await axios.post(`/transaction/top-up`, topup);
      const redirectUrl = result.data.data.redirectUrl;
      window.open(`${redirectUrl}`, "_blank");
      console.log(result);
      if (result.data.status === 200) {
        const dataDashboard = await axios.get(`/dashboard/${dataCookies}`);
        await dispatch({
          type: "GET_DASHBOARD",
          data: dataDashboard.data.data,
        });
      }
    } catch (error) {
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
        <Modal.Title id="contained-modal-title-vcenter">Topup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=" d-flex flex-column">
          <span className=" mb-5">
            Enter the amount of money, and click submit
          </span>
          <div className=" d-flex justify-content-center">
            <input
              className={`mb-5 w-75 ${styles.inputPin}`}
              style={{ height: "60px", padding: "0px 20px" }}
              type="number"
              onChange={(e) => setTopup({ amount: e.target.value })}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className=" w-25 me-3">
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
