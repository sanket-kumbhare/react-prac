import { useState } from "react";
import Todos from "./Todos";
function App() {
  let [counter, setCounter] = useState(0);
  let [todos, setTodos] = useState([
    { id: 1, todo: "todo1" },
    { id: 2, todo: "todo2" },
    { id: 3, todo: "todo3" },
  ]);
  return (
    <div className="App">
      <Todos todos={todos} />
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter+1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
