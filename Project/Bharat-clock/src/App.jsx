import "./App.css";
import ClockHeading from "./component/ClockHeading";
import ClockMoto from "./component/ClockMoto";
import CurrentTime from "./component/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <center>
      <ClockHeading />
      <ClockMoto />
      <CurrentTime />
    </center>
  );
}

export default App;
