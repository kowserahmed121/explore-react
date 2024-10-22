import { useState } from "react";
import "./App.css";
import Book from "./Book";
import Reload from "./Reload";

function App() {
  return (
    <>
      <h3>Practice React</h3>
      <Counter></Counter>
      <Book></Book>
      <Reload></Reload>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleBtn = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  };

  const handleRemove = () => {
    const removeCount = count - 1;
    setCount(removeCount);
  };

  const divStyle = {
    border: "2px solid orange",
    borderRadius: "20px",
    padding: "15px",
    margin: "15px",
  };
  return (
    <div style={divStyle}>
      <h2>count number : {count}</h2>
      <button onClick={handleBtn}>add</button>
      <button onClick={handleRemove}>remove </button>
    </div>
  );
}
export default App;
