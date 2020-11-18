const initialState = {
  features: []
};

const rootReducer = (state = initialState, action) => {
  const type = action.type;
  switch (type) {
    case "DATA_RECEIVED": {
      return {
        features: action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
