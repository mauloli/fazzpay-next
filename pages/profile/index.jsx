import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/main";
import { useRouter } from "next/router";
import styles from "./Profile.module.css";
import { IoArrowForwardOutline, IoPencil } from "react-icons/io5";
import Router from "next/router";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import logout from "../../components/logout";

export default function Profile() {
  const cloudinaryImg = process.env.CLOUDINARY_IMAGE;
  const id = Cookies.get("id");
  const router = useRouter();
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({});
  const [selected, setSelected] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  const getdataUser = async () => {
    try {
      const result = await axios.get(`/user/profile/${id}`);
      console.log(result);
      setData(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setForm({ image: e.target.files[0] });
    setSelected(true);
  };
  const handleReset = () => {
    setImage(null);
    setForm({});
    setSelected(false);
  };
  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      for (const data in form) {
        formData.append(data, form[data]);
      }
      const result = await axios.patch(
        `/user/image/${Cookies.get("id")}`,
        formData
      );
      setShowAlert(true);
      setTextAlert(result.data.msg);
      console.log(result);
      getdataUser();

      handleReset();
    } catch (error) {
      console.log(error.response);
      setShowAlert(true);
      setTextAlert(error.response.data.msg);
      setSelected(false);
    }
  };
  useEffect(() => {
    getdataUser();
  }, []);
  useEffect(() => {
    if (showAlert) {
      setTimeout(function () {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  console.log(form);
  return (
    <MainLayout data="profile">
      <div className=" w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <div
          className={`d-flex flex-column align-items-center ${styles.userContainer}`}
        >
          <div
            className={`alert ${
              textAlert.includes("large") || textAlert.includes("allowed")
                ? "alert-danger"
                : "alert-primary"
            }  position-absolute 
            w-50 d-flex justify-content-center ${
              showAlert ? styles.fadeIn : styles.fadeOut
            }`}
            style={{ top: "17%" }}
            role="alert"
          >
            {textAlert}
          </div>
          {image ? (
            image.search("blob") != -1 ? (
              <img
                className=" mb-3"
                src={image}
                style={{ width: "50px" }}
                alt=""
                onClick={() => setSelected(false)}
              />
            ) : (
              ""
            )
          ) : (
            <img
              className=" mb-3"
              src={
                data.image !== null
                  ? cloudinaryImg + data.image
                  : "../../user1.png"
              }
              style={{ width: "50px" }}
              alt=""
            />
          )}

          {selected ? (
            <button onClick={() => handleUpdate()}>Update Image</button>
          ) : (
            <input
              className={styles.inputImg}
              type="file"
              onChange={(e) => handleChange(e)}
            />
          )}

          <span>{data.firstName + " " + data.lastName}</span>
          <span>{data.noTelp}</span>
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
            <button
              onClick={() => logout()}
              className=" d-flex align-items-center justify-content-between"
            >
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
