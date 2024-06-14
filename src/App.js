import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {n
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className="counter">
        <h2>{count}</h2>
        <BtnIn inProp={increment} />
        <BtnDe deProp={decrement} />
        <BtnRe ResProp={reset} />
      </div>
    </>
  );
}

function BtnIn(props) {
  return <button onClick={props.inProp}>Increment</button>;
}
function BtnDe(props) {
  return <button onClick={props.deProp}>Decrement</button>;
}
function BtnRe(props) {
  return <button onClick={props.ResProp}>Reset</button>;
}
export default App;
