import React from "react";
import Bicycle from "./components/Bicycle";
import Car from "./components/Car";
import Skateboard from "./components/Skateboard";
import Truck from "./components/Truck";
import Bus from "./components/Bus";

export default function App() {
  return (
    <div className="App">
      <Car />
      <Bicycle />
      <Truck />
      <Bus />
      <Skateboard />
    </div>
  );
}
