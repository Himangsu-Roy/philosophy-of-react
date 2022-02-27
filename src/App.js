// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import OddOrEven from "./OddOrEven";
import CardNum from "./CardNum";

function App() {

  const [state, setstate] = useState(0)
  const randomCards = [39, 37, 36, 84]
  const [pickedNum, setPickedNum] = useState(null)
  // console.log(pickedNum)

  const incrementCount = () => {
    setstate((prev) => prev + 1)
  }

  const decermentCount = () => {
    setstate((prev) => prev - 1)
  }

  const resetCount = () => {
    setstate(0);
  }

  const pickedValueAlt = (cardNum) => {
    console.log(cardNum)
    setPickedNum(cardNum)
  }

  return (
    <div className="App">
      <p>Count: {state}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decermentCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <OddOrEven props={state} pickedNum={pickedNum}/>
      {randomCards.map((cardValue) => <CardNum key={cardValue} cardValue={cardValue} setPickedNum={setPickedNum} pickedValueAlt={pickedValueAlt} />)}
      
    </div>
  );
}

export default App;
