import "./App.css";
import Card from "./Component/Card";

function App() {
  let myObj = {
    name: "Bappaditya",
    age: 30,
    city: "Contai",
  };

  let myArr = [2, 88, 6, "adi"];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>
      <Card channel="Chaiaurcode" someObj={myObj} someArr={myArr} />
      <Card />
    </>
  );
}

export default App;
