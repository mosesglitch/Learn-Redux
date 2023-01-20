const colorReducer = (state = "green", action) => {
  switch (action.type) {
    case "CHANGECOLOR":
      return action.payload;
    default:
      return state;
  }
};
export default colorReducer;
