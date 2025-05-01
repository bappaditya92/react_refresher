import { useEffect, useState } from "react";
function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

 useEffect(()=>{
    counterFunction()
 },[counter,data])
//   function callOnce() {
//     console.log("call once function called");
//   }

  function counterFunction() {
    console.log("Counter function called...");
  }
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter: {counter}</button>
      <button onClick={()=>setData(data+1)}>data:{data}</button>
       
    
    </div>
  );
}
export default UseEffect;
