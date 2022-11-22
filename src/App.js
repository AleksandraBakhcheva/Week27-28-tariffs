import tariffs from "./assets/tariffs-array";
import Tariff from "./assets/components/Tariff";
import "./assets/styles/index.css"
import { useState } from 'react';

function App() {

  const [isActive, setActive] = useState();

  return (
    <div className="container">
    {
        tariffs.map((tariff) =>
          <Tariff key={tariff} header={tariff.header} currency={tariff.currency} amount={tariff.amount} price={tariff.price} option={tariff.option} note={tariff.note} index={tariff.index} isActive={isActive === tariff.index} onClick={setActive} />
        )
    }
    </div>
  );
}

export default App;