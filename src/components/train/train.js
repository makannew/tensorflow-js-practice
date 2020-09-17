import React, { useRef, useState } from "react";
import { useLinkedState } from "use-linked-state";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

export default function Train({ tensorsGateway, modelGateway }) {
  const [model] = useLinkedState(modelGateway);
  const [tensors] = useLinkedState(tensorsGateway);
  const [batchSize, setBatchSize] = useState(32);
  const [epochs, setEpochs] = useState(20);
  const trainRef = useRef();
  const startTrain = async () => {
    if (!model || !tensors) return;
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ["mse"],
    });
    return await model.fit(tensors.inputs, tensors.labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(trainRef.current, ["loss", "mse"], {
        height: 200,
        callbacks: ["onEpochEnd"],
      }),
    });
  };

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
    <div>
      <div>
        <button onClick={startTrain}>Click to train!</button>
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
      </div>

      <div ref={trainRef}></div>
    </div>
  );
}
