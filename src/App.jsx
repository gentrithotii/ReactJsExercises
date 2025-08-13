import { useState } from "react";
import "./App.css";
import AppHeader from "./components/exercise1/AppHeader";
import GrettingBanner from "./components/exercise2/GrettingBanner";
import ProfileCard from "./components/exercise3/ProfileCard";
import PrimaryButton from "./components/exercise4/PrimaryButton";
import QuantitySelector from "./components/exercise5/QuantitySelector";

function App() {
  const [selectedQty, setSelectedQty] = useState(1);

  const handleQuantityChange = (qty) => {
    setSelectedQty(qty);
  };

  return (
    <div className="text-center">
      <div className="mb-3">
        <h1>Exercise 1</h1>
        <AppHeader title={"Hello there"} />
      </div>

      <div className="mb-4">
        <h1>Exercise 2</h1>
        <GrettingBanner name={"Gentrit"} />
      </div>

      <div className="d-flex flex-column align-items-center">
        <h1>Exercise 3</h1>
        <ProfileCard
          avatar={
            "https://intentplanning.ca/wp-content/uploads/2019/01/sample-person.jpg"
          }
          name={"Gentrit Hoti"}
          jobTitle={"Developer"}
          email={"gentrit@test.com"}
        />
      </div>

      <div className="mb-3">
        <h1>Exercise 4</h1>
        <PrimaryButton label={"Submit"} disabled={true} />
      </div>

      <div className="mb-3">
        <h1>Exercise 5</h1>
        <p>{selectedQty}</p>
        <QuantitySelector onChange={handleQuantityChange} />
      </div>
    </div>
  );
}

export default App;
