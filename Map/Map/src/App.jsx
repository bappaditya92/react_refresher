// import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";
// function App() {
//   let foodItems = ["Vegetables", "Egg", "Chicken", "Milk", "Fruits", "Ghee"];
//   return (
//     <>
//       <h1>Healthy Food</h1>;
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           // eslint-disable-next-line react/jsx-key
//           <li className="list-group-item">{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  let foodItems = ["Vegetables", "Egg", "Chicken", "Milk", "Fruits", "Ghee"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
