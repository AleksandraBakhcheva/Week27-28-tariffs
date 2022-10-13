import tariffs from "./assets/tariffs-array";
import Tariff from "./assets/components/Tariff";
import "./assets/styles/index.css"

function App() {

  return (
    <div className="container">
      {
        tariffs.map((tariff, index) =>
        <div className={"tariff tariff__" + `${index++}`}>
          <Tariff key={tariff} header={tariff.header} currency={tariff.currency} amount={tariff.amount} price={tariff.price} option={tariff.option} note={tariff.note} isSelected={tariff.isSelected} />
        </div>
        )
      }
    </div>
  );
}

export default App;