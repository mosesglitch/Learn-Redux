const ageReducer = (state = null, action) => {
  switch (action.type) {
    case "CALCULATE AGE":
      return 2023 - parseInt(action.payload);
    default:
      return state;
  }
};

export default ageReducer;
