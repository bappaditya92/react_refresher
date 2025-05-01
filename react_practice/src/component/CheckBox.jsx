import { useState } from "react";

function CheckBox() {
    const[skills,setSkills]=useState([]);
    const handleskills = (event)=>{
     console.log(event.target.value, event.target.checked)
     if(event.target.checked == true){
        setSkills([...skills, event.target.value])
     }
     else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])
     }
     }
     
  return (
    <div>
      <h1>Select Your Skills</h1>
      <input onChange={handleskills} type="checkbox" id="Java" value={"java"} />
      <label htmlFor="java">Java</label>
      <br />
      <br />
      <input onChange={handleskills} type="checkbox" id="javascript"  value={"javascript"}/>
      <label htmlFor="javascript">Javascript</label>
      <br />
      <br />
      <input onChange={handleskills} type="checkbox" id="python" value={"python"}/>
      <label htmlFor="python">Python</label>
      <br /><br />
      <input onChange={handleskills} type="checkbox" id="node.js" value={"node.js"}/>
      <label htmlFor="node.js">Node.Js</label>
      <h1>{skills.toString()}</h1>
     
    </div>
  );
}
export default CheckBox;
