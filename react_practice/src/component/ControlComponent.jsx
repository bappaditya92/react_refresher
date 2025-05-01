import { useState } from "react";

function ControlComponent(){
    const[name,setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    
    
    return(
        <div>
            <h1>ControlComponent</h1>
           {/* <form action=""> */}
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
            <br /><br />
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"  />
            <br /><br />
            <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"  />
            <br /><br />
            <button>Submit</button>
            <button onClick={()=>{setName(''); setEmail('');setPassword('')}}>Clear</button>
            
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>

           {/* </form> */}
            
        </div>
    )
}
export default ControlComponent;