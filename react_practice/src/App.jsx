import Header from "./Header";
import Todo from "./Todo";
import { UserComponent, Profile, Category } from "./UserComponent";
function App() {
  //const name = "Bappaditya"

  const path = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const name = "Rockey"
  const userObj = {
    name:"Aditya Sinha",
    email:"bsinha@gmail.com",
    mob:123,
    address: "Kolkata"
  }
  const userArr = ['ram', 'sam', 'jaddu']
  const x = 10;
  const y = 20;

  function fruit(){
    return "Apple"
  }

 function sum(a,b){
  return a+b;
 }

function operation(a,b,op){
  
  if(op=="+"){
    return a+b;
  }
  else if(op=="-"){
    return a-b;
  }
  else{
    return a*b;
  }
}

  return (
    <>
    <h1>JSX with curly braces {name?name:"User not found"}</h1>
    <h1>{x+y}</h1>
    <h1>{fruit()}</h1>
    <h1>{sum(5,85)}</h1>
    <h1>{operation(52,20,"-")}</h1>
    <h1>{userObj.email}</h1>
    <h1>{userArr[1]}</h1>
    <input type="text" value={name} id={name} />
    <br />
    <img src={path} />
    
    
    </>
  );
}

export default App;
