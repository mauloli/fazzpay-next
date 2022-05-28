import axios from "axios";
import Cookies from "js-cookie";
const axiosApiIntances = axios.create({
  // baseURL: "http://localhost:3002/",
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: process.env.URL_BACKEND,
});

export default axiosApiIntances;
