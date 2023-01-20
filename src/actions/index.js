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
export const changeColor = (color) => {
  return {
    type: "CHANGECOLOR",
    payload: color,
  };
};

export const myAge = (age) => {
  console.log("action", age);
  return {
    type: "CALCULATE AGE",
    payload: age,
  };
};
