import Header from "./Header";
import Todo from "./Todo";
import { UserComponent, Profile, Category } from "./UserComponent";
import CurlyBraces from "./component/CurlyBraces";
import ClickEventFunctionCall from "./component/ClickEventFunctionCall";
import State from "./component/State";
import Counter from "./component/Counter";
import Toggle from "./component/Toggle";
import ElseIf from "./component/ElseIf";
import Users from "./component/Users";
import College from "./component/College";
import Student from "./component/student";
//import { useState } from "react";
import Userr from "./Userr";
import Wrapper from "./component/Wrapper";
import SmallTodo from "./component/SmallTodo";
import ControlComponent from "./component/ControlComponent";
import CheckBox from "./component/CheckBox";
import RadionButton from "./component/RadioButton";
import Loops from "./component/Loop";
import ReuseComponentInLoops from "./component/ReuseComponentInLoops"
import Clock from "./component/Clock";
import NestedLoops from "./component/NestedLoop";
import UseEffect from "./component/useEffect";
import UseEffectProps from "./component/useEffectProps";
//import { useState } from "react";
import Counterr from "./component/Counterr";


function App() {
  // const[count,setCount] = useState(0);
  // const[data,setData] = useState(0);

  // const[display,setDisplay] = useState(true)

  //const[color, setColor] = useState("green")
  // const userDetails = {
  //   userId: "u123456",
  //   firstName: "John",
  //   lastName: "Doe",
  //   username: "johndoe",
  //   email: "john.doe@example.com",
  //   passwordHash: "hashed_password_here",
  //   phoneNumber: "+1234567890",
  //   dateOfBirth: "1990-05-15",
  //   gender: "male",
  //   address: {
  //     street: "123 Elm Street",
  //     city: "New York",
  //     state: "NY",
  //     postalCode: "10001",
  //     country: "USA"
  //   }
  // }
  
  //const collegeName = ["Ju","IIT", "NIT","MIT"];

  // const studentName = ["Ram","Shyam","Jodu","Modhu"];

  //const[student, setStudent] = useState("Akash")

  //const[login, setLogin] = useState("Please Login")

  return (
    <>

      {/* <CurlyBraces/> */}
      {/* <ClickEventFunctionCall/> */}
      {/* <State/> */}
      {/* <Counter/> */}
      {/* <Toggle/> */}
      {/* <ElseIf/> */}
      {/* <Users name={userName} age= {age} address = {"Kolkata"} email={email} userName/> */}
      {/* <College/>
    <College name= {collegeName[0]}/>
    <College name= {collegeName[1]}/>
    <College name= {collegeName[2]}/>
    <College name= {collegeName[3]}/>
   
    <Users userDetails = {userDetails}/>
    <Users userDetails = {userDetails2}/>
    <Users userDetails = {userDetails3}/>
    <Users userDetails = {userDetails4}/>
    <Users userDetails = {userDetails5}/> */}
      {/* {student && <Student name={student}/>}
    <button onClick={()=>setStudent("Bappaditya")}>Change Student Name</button> */}

      {/* <Userr name=""/>
    <Userr/> */}
    
      {/* <Wrapper color="orange">
        <h1>Hello React.js</h1>
      </Wrapper> */}
      
      
      {/* <SmallTodo/> */}
      {/* <ControlComponent/> */}
      {/* <CheckBox/> */}
      {/* <RadionButton/> */}
      {/* <Loops/> */}
      {/* <ReuseComponentInLoops/> */}
      {/* <h1>Digital clock in React.js</h1>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
      
      <Clock color={color}/> */}

      {/* <NestedLoops/> */}


{/* <UseEffect/> */}
  
     
     {/* <UseEffectProps count={count} data={data}/>
     <button onClick={()=>setCount(count+1)}>Dounter</button>
     <button onClick={()=>setData(data+1)}>data</button> */}
     {/* {
      display?<Counterr data={data} count={count} display={display}> </Counterr>:null
     }
     
     <button onClick={()=>setCount(count+1)}>Counter</button>
     <button onClick={()=>setData(data+1)}>data</button> 
     <button onClick={()=>setDisplay(!display)}>Toggle</button> */}
    </>
  
  );
}

export default App;
