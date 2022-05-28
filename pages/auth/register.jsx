import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import Banner from "../../components/banner/Banner";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
  IoPersonOutline,
} from "react-icons/io5";
import axios from "../../utils/axios";
export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [statusRegister, setStatusRegister] = useState({ status: "", msg: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      const result = await axios.post("auth/register", form);
      console.log(result);
      setStatusRegister({
        ...statusRegister,
        status: result.data.status,
        msg: result.data.msg,
      });

      setTimeout(function () {
        setStatusRegister(0);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      }, 5000);
    } catch (error) {
      console.log(error.response);
      alert(error.response.data.msg);
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.bannerContainer} style={{ flex: 1 }}>
        <Banner />
      </div>

      <div className={styles.formContainer} style={{ flex: 1 }}>
        <div className={styles.mainForm}>
          <div className={`${styles.formTextHeader}`}>
            <span style={{ fontSize: "24px" }}>
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </span>
          </div>

          <div className={styles.formTextBody}>
            <span>
              Transfering money is eassier than ever, you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </span>
          </div>
          {statusRegister.status === 200 ? (
            <div
              className="alert alert-primary position-absolute"
              role="alert"
              style={{ top: "30%", width: "450px" }}
            >
              Succes Register Please Check Your Email
            </div>
          ) : (
            ""
          )}

          <div className={styles.formFirstName}>
            <IoPersonOutline color={form.firstName.length > 0 ? "blue" : ""} />

            <input
              className={
                form.firstName.length > 0
                  ? styles.formFirstName_inputed
                  : styles.formFirstName_input
              }
              name="firstName"
              type="text"
              placeholder="Enter Your First Name"
              style={{
                border: 0,
                outline: 0,
              }}
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formLastName}>
            <IoPersonOutline color={form.lastName.length > 0 ? "blue" : ""} />
            <input
              className={
                form.lastName.length > 0
                  ? styles.formLastName_inputed
                  : styles.formLastName_input
              }
              name="lastName"
              type="text"
              placeholder="Enter Your Last Name"
              style={{
                border: 0,
                outline: 0,
              }}
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formEmailRegister}>
            <IoMailOutline color={form.email.length > 0 ? "blue" : ""} />
            <input
              className={
                form.email.length > 0
                  ? styles.formEmailRegister_inputed
                  : styles.formEmailRegister_input
              }
              name="email"
              type="email"
              placeholder="Enter Your Email"
              style={{
                border: 0,
                outline: 0,
              }}
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formPasswordRegister}>
            <IoLockClosedOutline
              color={form.password.length > 0 ? "blue" : ""}
            />
            <input
              className={
                form.password.length > 0
                  ? styles.formPasswordRegister_inputed
                  : styles.formPasswordRegister_input
              }
              name="password"
              type="password"
              placeholder="Enter Your Password"
              style={{
                border: 0,
                outline: 0,
              }}
              value={form.password}
              onChange={handleChange}
            />
            <IoEyeOffOutline style={{ position: "absolute", right: "15%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}></div>
          <div className={styles.textForgot}>
            <span>Forgot Password</span>
          </div>
          <div className={styles.buttonContainer}>
            <form
              className=" w-100 d-lg-flex justify-content-center"
              onSubmit={handleSubmit}
            >
              <button
                className={
                  (form.firstName.length,
                  form.lastName.length,
                  form.email.length,
                  form.password.length > 0
                    ? styles.buttonLogin
                    : styles.buttonLogin0)
                }
                disabled={
                  (form.firstName.length,
                  form.lastName.length,
                  form.email.length,
                  form.password.length > 0 ? false : true)
                }
                type="submit"
              >
                Register
              </button>
            </form>
          </div>

          <span style={{ display: "flex", justifyContent: "center" }}>
            Already have an acccount? <Link href={"/login"}> Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
