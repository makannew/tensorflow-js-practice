import React from "react";
import "./App.css";
import LoadData from "./components/load-data/load-data";
import { useStateGateway } from "use-linked-state";
import DataPlot from "./components/data-plot/data-plot";
import Model from "./components/model/model";
import Tensors from "./components/tensors/tensors";
import Train from "./components/train/train";
import Predict from "./components/predict/predict";

function App() {
  const dataGateway = useStateGateway(null);
  const modelGateway = useStateGateway(null);
  const tensorsGateway = useStateGateway(null);

  return (
    <div className="App">
      <LoadData dataGateway={dataGateway} />
      <DataPlot dataGateway={dataGateway} />
      <Model modelGateway={modelGateway} />
      <Tensors dataGateway={dataGateway} tensorsGateway={tensorsGateway} />
      <Train tensorsGateway={tensorsGateway} modelGateway={modelGateway} />
      <Predict
        tensorsGateway={tensorsGateway}
        modelGateway={modelGateway}
        dataGateway={dataGateway}
      />
    </div>
  );
}

export default App;
