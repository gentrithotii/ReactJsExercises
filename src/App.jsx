import "./App.css";
import AppHeader from "./components/exercise1/AppHeader";
import GrettingBanner from "./components/exercise2/GrettingBanner";

function App() {
  return (
    <div className="text-center">
      <div>
        <h1>Exercise 1</h1>
        <AppHeader title={"Hello there"} />
      </div>

      <div>
        <h1>Exercise 2</h1>
        <GrettingBanner name={"Gentrit"} />
      </div>
    </div>
  );
}

export default App;
