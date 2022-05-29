import axios from "../../utils/axios";

export const getUser = (data) => {
  return {
    type: "GET_USER",
    data: data,
  };
};
