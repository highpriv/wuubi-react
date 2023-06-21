const initialState = {
  appSettings: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APP_SETTINGS":
      return {
        ...state,
        appSettings: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
