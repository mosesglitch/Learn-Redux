import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import colorReducer from "./colors";
import { combineReducers } from "redux";
import ageReducer from "./ageCalc";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  color: colorReducer,
  age: ageReducer,
});
export default allReducers;

//STORE -> GLOBALIZED STATE

//ACTION INCREMENT -> Describes what you want to do
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };
//REDUCER -> Describes how actions transform state to the next state

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// //DISPATCH ->The way you send an an action to the reducer
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
