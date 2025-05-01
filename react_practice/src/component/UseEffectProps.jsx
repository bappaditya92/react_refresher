import { useEffect } from "react";

function UseEffectProps({ count, data}) {
  useEffect(() => {
    handleCounter();
  }, [count]);

  useEffect(()=>{
    handleData()
  },[data])
  const handleCounter = () => {
    console.log("handle counter called...");
  };

  const handleData= () => {
    console.log("handle data called...");
  };
  return (
    <div>
      <h1>counter value:{count}</h1>
      <h1>Data Value:{data}</h1>
    </div>
  );
}
export default UseEffectProps;
