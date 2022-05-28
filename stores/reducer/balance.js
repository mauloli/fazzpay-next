const initialState = {
  data: [],
};

const balance = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BALANCE_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_BALANCE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.data,
        msg: action.payload.data.msg,
      };

    case "GET_BALANCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };
    default:
      return state;
  }
};

export default balance;
