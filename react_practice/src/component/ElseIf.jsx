import { useState } from "react";

const ElseIf = ()=>{
    const[count,setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Toggle</button>
            {
                count==0?<h1>Condition 0</h1> 
                :count==1?<h1>condion 1</h1>
                :count==2?<h1>condion 2</h1>
                :count==3?<h1>condition 3</h1>
                :count==4?<h1>Condition 4</h1>
                :count==5?<h1>Condition 5</h1>
                :<h1>Other Condition</h1>        }
        </div>

    )
}
export default ElseIf;