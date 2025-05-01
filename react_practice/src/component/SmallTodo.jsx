import { useState } from "react";

const SmallTodo = ()=>{
    const[val,setVal] = useState("")
    return(
        <div>
            <h1>Small Todo App</h1>
            <input type="text" value={val} placeholder="" onChange={(event)=>setVal(event.target.value)} />
            <h1>{val}</h1>
            <button onClick={()=>setVal("")}>clcik here to reset</button>

        </div>

    )
}
export default SmallTodo;