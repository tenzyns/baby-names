import "./App.css";
import BabyNames from "./BabyName";
import babyNames from "./babyNames.json";

function App() {
  return (
    <div className="App">
      <BabyNames namesOfBaby={babyNames} />
    </div>
  );
}

export default App;
