import { useState } from "react";
import "./App.css";
import AppHeader from "./components/exercise1/AppHeader";
import GrettingBanner from "./components/exercise2/GrettingBanner";
import ProfileCard from "./components/exercise3/ProfileCard";
import PrimaryButton from "./components/exercise4/PrimaryButton";
import QuantitySelector from "./components/exercise5/QuantitySelector";
import PasswordField from "./components/exercise6/PasswordField";
import LikeButton from "./components/exercise7/LikeButton";
import ContactSearch from "./components/exercise8/ContactSearch";
import TodoList from "./components/exercise9/TodoList";

function App() {
  const [selectedQty, setSelectedQty] = useState(1);
  const contacSearchList = [
    { id: 1, name: "Gentrit" },
    { id: 2, name: "Ninja" },
    { id: 3, name: "Stili" },
    { id: 4, name: "Llejsi" },
    { id: 5, name: "Taki" },
  ];

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

      <div className="d-flex flex-column mb-3 align-items-center">
        <h1>Exercise 6</h1>
        <PasswordField />
      </div>

      <div className="mb-3">
        <h1>Exercise 7</h1>
        <LikeButton />
      </div>

      <div className="mb-3">
        <h1>Exercise 8</h1>
        <ContactSearch contacts={contacSearchList} />
      </div>

      <div className="mb-3">
        <h1>Exercise 9</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
