import { useState } from "react";
import Counter from "./Counter";
function State(){

    const[fruit,setFruit] = useState("Mango");
    const handleFruit =()=>{
        setFruit("Banana");
    }
    return(
        <div>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Click Here</button>

        </div>
    )
}
export default State;