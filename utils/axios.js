import axios from "axios";
import Cookies from "js-cookie";
const axiosApiIntances = axios.create({
  // baseURL: "http://localhost:3002/",
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: process.env.URL_BACKEND,
});

axiosApiIntances.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
