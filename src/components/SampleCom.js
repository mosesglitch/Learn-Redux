import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { myAge } from "../actions";
const SampleCom = () => {
  const age = useSelector((state) => state.age);
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const color = useSelector((state) => state.color);

  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <form>
        <input
          placeholder="dob"
          onChange={(e) => {
            dispatch(myAge(e.target.value));
          }}
        />
        {age}
        <br />
        {counter}
        {isLogged}
        {color}
      </form>
      {/* {age} */}
    </div>
  );
};
export default SampleCom;
