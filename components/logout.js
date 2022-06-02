import React from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import axios from "../utils/axios";
export default async function logout() {
  Cookies.remove("id");
  Cookies.remove("token");
  localStorage.clear();

  await axios.post("/auth/logout");
  Router.push("/login");
}
