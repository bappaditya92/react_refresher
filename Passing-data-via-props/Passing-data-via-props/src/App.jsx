// import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";
// function App() {
//   //let foodItems = [];
//   let foodItems = ["Vegetables", "Egg", "Chicken", "Milk", "Fruits", "Ghee"];
//   // if (foodItems.length === 0) {
//   //   return <h3>I am Still Hungry</h3>;
//   // }
//   let emptyMessage = foodItems.length === 0 ? <h3>I am Still Hungry</h3> : null;
//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {emptyMessage}
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           // eslint-disable-next-line react/jsx-key
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  //let foodItems = [];
  let foodItems = ["Vegetables", "Egg", "Chicken", "Milk", "Fruits", "Ghee"];
  // if (foodItems.length === 0) {
  //   return <h3>I am Still Hungry</h3>;
  // }

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am Still Hungry</h3>}
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
