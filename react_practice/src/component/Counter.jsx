import { useState } from "react";
const Counter = ()=> {
    const[count,setCount]= useState(0);
    const[rCount,setRcount] = useState(10);

    return(
        <>
            <h1>{count}</h1>
            <h2>{rCount}</h2>
            <button onClick={()=>setCount(count+1)}>click me</button>
            <button onClick={()=>setRcount(rCount-1)}>update button</button>
            
        </>
    )
}
export default Counter;