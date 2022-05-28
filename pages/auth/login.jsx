import React, { useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import Banner from "../../components/banner/Banner";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import Router from "next/router";
export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const result = await axios.post("/auth/login", form);
      Cookies.set("token", result.data.data.token);
      Cookies.set("id", result.data.data.id);
      if (result.data.data.pin == null) {
        Router.push("/create-pin");
      } else {
        Router.push("/home");
      }
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className={styles.login}>
      <div style={{ flex: 1 }}>
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

          <div className={styles.formEmail}>
            <IoMailOutline color={form.email.length > 0 ? "blue" : ""} />
            <input
              className={
                form.email.length > 0
                  ? styles.formEmail_inputed
                  : styles.formEmail_input
              }
              name="email"
              type="email"
              placeholder="Enter Your Email"
              style={{
                border: 0,
                outline: 0,
              }}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formPassword}>
            <IoLockClosedOutline
              color={form.password.length > 0 ? "blue" : ""}
            />
            <input
              className={
                form.password.length > 0
                  ? styles.formPassword_inputed
                  : styles.formPassword_input
              }
              name="password"
              type="password"
              placeholder="Enter Your Password"
              style={{
                border: 0,
                outline: 0,
              }}
              onChange={handleChange}
            />
            <IoEyeOffOutline style={{ position: "absolute", right: "15%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}></div>
          <div className={styles.textForgot}>
            <span>Forgot Password</span>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonLogin} onClick={handleSubmit}>
              Login
            </button>
          </div>

          <span style={{ display: "flex", justifyContent: "center" }}>
            Dont have an acccount? <Link href={"/register"}>Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
