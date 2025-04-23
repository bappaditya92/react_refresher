import Header from "./Header";
import {UserComponent,Profile, Category} from "./UserComponent";
function App(){
  return (
   <>
    <h1>First Component</h1>
    <Home/>
    <UserComponent/>
    <Profile/>
    <Category/>
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