import Header from "./Header";
import {UserComponent,Profile, Category} from "./UserComponent";
function App(){
  const name = "Adi"; 
  let fName = "Bappaditya";
  let lname = "Sinha"
  return (
   <>
    <h1>First Component written by {name}</h1>
    <h1>{10+52}</h1>
    <h1>{fName +" "+ lname}</h1>
   <button onClick={()=> alert("hello")}>Click Here</button>
   </>   
  )
}


function Home(){
  return (
    <div>
      <h2>Inside Home</h2>
    </div>
  )
}




export default App;