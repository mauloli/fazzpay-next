const initialState = {
  data: [],
};

const dataTransfer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_TRANSFER":
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default dataTransfer;
