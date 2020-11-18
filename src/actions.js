const { getDefaultNormalizer } = require("@testing-library/react");

const data = require("./api_techician_response_data");

let counter = 0;

const dataReceived = (features) => {
  return {
    type: "DATA_RECEIVED",
    payload: features
  };
};

const getData = () => (dispatch) => {
  const time = counter;
  if (time < 17) {
    dispatch(
      dataReceived(
        data[time] ? data[time].features : data[data.length - 1].features
      )
    );
  }
  counter++;
};

export default getData;
