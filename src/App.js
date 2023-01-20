import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeColor } from "./actions";
import SampleCom from "./components/SampleCom";
const colors = ["green", "black", "purple", "blue", "red", "gray"];

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const color = useSelector((state) => state.color);

  const dispatch = useDispatch();
  // (e)=>dispatch(changeColor(e.target.value))
  const colorList = colors.map((color) => {
    return (
      <div>
        <h1 onClick={(e) => dispatch(changeColor(e.target.innerText))}>
          {color}
        </h1>
      </div>
    );
  });
  console.log("statee", color);
  return (
    <div className="App">
      <SampleCom />
      <h1>Counter={counter}</h1>
      <h1 style={{ color: color }}>My favourite color is</h1>
      {colorList}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>You shouldnt see this</h3> : <h4>Nadaaaaaa</h4>}
    </div>
  );
}

export default App;
