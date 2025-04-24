import { useState } from "react";
import User from "./User";
function Toggle(){

    const[display,setDisplay] = useState(false)
    return (
        
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                // display?<h1>Bappadiya</h1>:null
                display?<User/>:null
            }
            
            
        </div>
    )
}
export default Toggle;