import React from "react";
import "./App.css";
import LoadData from "./components/load-data/load-data";
import { useStateGateway } from "use-linked-state";
import DataPlot from "./components/data-plot/data-plot";
import Model from "./components/model/model";

function App() {
  const dataGateway = useStateGateway(null);
  const modelGateway = useStateGateway(null);

  return (
    <div className="App">
      <LoadData dataGateway={dataGateway} />
      <DataPlot dataGateway={dataGateway} />
      <Model modelGateway={modelGateway} />
    </div>
  );
}

export default App;
