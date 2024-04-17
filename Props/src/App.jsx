import "./App.css";
import Card from "./Component/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>
      <Card userName="Chaiaurcode" btnText="Click me" />
      <Card userName="Mani" />
    </>
  );
}

export default App;
