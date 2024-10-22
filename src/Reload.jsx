import { useEffect, useState } from "react";
import Load from "./Load";
import "./style.css";
export default function Reload() {
  const [reload, reloadState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => reloadState(data));
  }, []);
  return (
    <div className="grid-container">
      {reload.map((load) => (
        <Load load={load}></Load>
      ))}
    </div>
  );
}
