export const increment = (ni) => {
  return {
    type: "INCREMENT",
    payload: ni,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
