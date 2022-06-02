const initialState = {
  data: [],
};

const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOGIN":
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default userLogin;
