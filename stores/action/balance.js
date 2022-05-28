import axios from "../../utils/axios";

export const getBalance = (balance) => {
  return {
    type: "GET_BALANCE",
    data: balance,
  };
};
