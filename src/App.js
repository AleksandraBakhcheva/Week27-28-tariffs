import React from "react";
import Tariff from "./assets/components/tariff";
import "./assets/styles/index.css"

function App() {
  const isSelected = true;
  return (
    <div className="container">
      <div className="tariff tariff__300">
        <Tariff amount={300} option={10}></Tariff>
      </div>
      <div className="tariff tariff__450">
        <Tariff amount={450} option={50}></Tariff>
      </div>
      <div className={"tariff tariff__550 " + (isSelected ? "selected" : "")}>
        <Tariff amount={550} option={100}></Tariff>
      </div>
      <div className="tariff tariff__1000">
        <Tariff amount={1000} option={200}></Tariff>
      </div>
    </div>
  );
}

export default App;