import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import { useLinkedState } from "use-linked-state";
import LayersUI from "../layers-ui/layers-ui";
import style from "./model.module.css";

const ACTIVATION = ["relu", "sigmoid", "tanh", "softmax", "linear"];
export default function Model({ modelGateway, refreshGateway }) {
  const [refresh] = useLinkedState(refreshGateway);
  const [model, setModel] = useLinkedState(modelGateway);
  const [layers, setLayers] = useState([
    { layerNo: 1, units: 50, activation: ACTIVATION[0] },
    { layerNo: 2, units: 50, activation: ACTIVATION[0] },
    { layerNo: 3, units: 50, activation: ACTIVATION[0] },
    { layerNo: 4, units: 50, activation: ACTIVATION[0] },
  ]);
  const modelRef = useRef();
  //
  useEffect(() => {
    if (model) {
      model.layers.forEach((layer) => layer.dispose());
    }
    const thisModel = tf.sequential();
    thisModel.add(tf.layers.dense({ inputShape: [1], units: 1 }));
    for (let layer of layers) {
      thisModel.add(
        tf.layers.dense({
          units: Number(layer.units),
          activation: layer.activation,
        })
      );
    }
    thisModel.add(tf.layers.dense({ units: 1 }));
    setModel(thisModel);
  }, [layers]);

  useEffect(() => {
    if (model) {
      tfvis.show.modelSummary(modelRef.current, model);
    }
  }, [model]);
  return (
    <div className={style["container"]}>
      <h2>Model Topology</h2>
      <LayersUI
        layers={layers}
        updateFunc={setLayers}
        ACTIVATION={ACTIVATION}
      />
      <div className={style["model"]} ref={modelRef}></div>
    </div>
  );
}
