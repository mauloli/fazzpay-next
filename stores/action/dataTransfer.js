import axios from "../../utils/axios";

export const getDataTransfer = (data) => {
  return {
    type: "GET_DATA_TRANSFER",
    data: data,
  };
};
