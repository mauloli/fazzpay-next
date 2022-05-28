const initialState = {
  data: [],
  otherData: [], //other data if needed
  isLoading: false,
  isError: false,
  msg: "",
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DASHBOARD":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
      };

    default:
      return state;
  }
};

export default dashboard;
