import React, { useEffect, useState } from "react";
import "./App.css";
import LoadData from "./components/load-data/load-data";
import { useStateGateway } from "use-linked-state";
import DataPlot from "./components/data-plot/data-plot";
import Model from "./components/model/model";
import Tensors from "./components/tensors/tensors";
import Train from "./components/train/train";
import Predict from "./components/predict/predict";
import Links from "./components/links/links";
import Header from "./components/header/header";
import ResizeManager from "./components/resize-manager/resize-manager";

function App() {
  const dataGateway = useStateGateway(null);
  const modelGateway = useStateGateway(null);
  const tensorsGateway = useStateGateway(null);
  const refreshGateway = useStateGateway(false);

  // TODO: add save and model feature for trained model

  return (
    <div className="App">
      <ResizeManager refreshGateway={refreshGateway} />
      <Header />
      <LoadData dataGateway={dataGateway} />
      <DataPlot dataGateway={dataGateway} refreshGateway={refreshGateway} />
      <Model modelGateway={modelGateway} refreshGateway={refreshGateway} />
      <Tensors dataGateway={dataGateway} tensorsGateway={tensorsGateway} />
      <Train
        tensorsGateway={tensorsGateway}
        modelGateway={modelGateway}
        refreshGateway={refreshGateway}
      />
      <Predict
        tensorsGateway={tensorsGateway}
        modelGateway={modelGateway}
        dataGateway={dataGateway}
        refreshGateway={refreshGateway}
      />
      <Links />
    </div>
  );
}

export default App;
