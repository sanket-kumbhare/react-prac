import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(counter);
      setCounter((previous) => previous + 1);
    }, 1000);
  }, [counter]);
  return (
    <div>
      <h1>{counter}</h1>
      <button>Stop</button>
    </div>
  );
}

export default App;
