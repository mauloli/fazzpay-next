import axios from "../../utils/axios";

export const template = (arg) => {
  return {
    type: "TEMPLATE",
    payload: axios.post(`url/template`, arg),
  };
};
