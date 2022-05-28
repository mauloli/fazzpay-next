const initialState = {
  data: [],
  otherData: [], //other data if needed
  isLoading: false,
  isError: false,
  msg: "",
};

const template = (state = initialState, action) => {
  switch (action.type) {
    case "TEMPLATE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "TEMPLATE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "TEMPLATE_REJECTED":
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

export default template;
