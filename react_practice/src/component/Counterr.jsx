
import { useEffect } from "react";
import Counter from "./Counter"


function Counterr({count, data}){
   
useEffect(()=>{
    console.log("mounting phase only..."); 
},[])

useEffect(()=>{
    console.log("Update phase only..."); 
},[count])

useEffect(()=>{
    return()=>{
        console.log("unmount phase only.....")
    }
},[])

    return(
        <div>
            <h1>Counter:{count}</h1>
            <h1>Data:{data}</h1>
            
        </div>
    )
   
}
export default Counterr;