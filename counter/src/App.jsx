import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
  };
  return (
    <>
      <h1> Namate React</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removeValue}>remove value </button>
      <p>footer</p>
    </>
  );
}

export default App;
