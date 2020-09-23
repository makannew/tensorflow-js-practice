import React, { useRef, useState } from "react";
import { useLinkedState } from "use-linked-state";
import useDelayedFunction from "use-delayed-function";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import style from "./train.module.css";

export default function Train({
  tensorsGateway,
  modelGateway,
  refreshGateway,
}) {
  const [refresh] = useLinkedState(refreshGateway);
  const [model] = useLinkedState(modelGateway);
  const [tensors] = useLinkedState(tensorsGateway);
  const [batchSize, setBatchSize] = useState(32);
  const [epochs, setEpochs] = useState(20);
  const [training, setTraining] = useState(false);
  const [delayedTrain] = useDelayedFunction(train);

  const trainRef = useRef();

  const startTrain = () => {
    if (training) return;
    setTraining(true);
    delayedTrain().then(() => {
      setTraining(false);
    });
  };
  function train() {
    if (!model || !tensors) return;
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ["mse"],
    });
    return model.fit(tensors.inputs, tensors.labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(trainRef.current, ["mse"], {
        height: 200,
        callbacks: ["onEpochEnd"],
      }),
    });
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "epochs":
        setEpochs(Number(e.target.value));
        break;
      case "batchSize":
        setBatchSize(Number(e.target.value));
        break;
      default:
        break;
    }
  }
  return (
    <div className={style["container"]}>
      <div className={style["controls"]}>
        <label htmlFor="epochs">{`Epochs: ${epochs}`}</label>
        <input
          type="range"
          name="epochs"
          value={epochs}
          min="1"
          max="200"
          step="1"
          onChange={handleChange}
        />
        <label htmlFor="batchSize">{`BatchSize: ${batchSize}`}</label>

        <input
          type="range"
          name="batchSize"
          value={batchSize}
          min="1"
          max="400"
          step="1"
          onChange={handleChange}
        />
        <button className="btn" onClick={startTrain}>
          {training ? "Training in progress..." : "Click to train!"}
        </button>
      </div>

      <div className={style["graph"]} ref={trainRef}></div>
    </div>
  );
}
