import React, { useRef } from "react";
import { useLinkedState } from "use-linked-state";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

export default function Train({ tensorsGateway, modelGateway }) {
  const [model] = useLinkedState(modelGateway);
  const [tensors] = useLinkedState(tensorsGateway);
  const trainRef = useRef();
  const startTrain = async () => {
    if (!model || !tensors) return;
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ["mse"],
    });
    return await model.fit(tensors.inputs, tensors.labels, {
      batchSize: 32,
      epochs: 50,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(trainRef.current, ["loss", "mse"], {
        height: 200,
        callbacks: ["onEpochEnd"],
      }),
    });
  };

  return (
    <div>
      <button onClick={startTrain}>Click to train!</button>
      <div ref={trainRef}></div>
    </div>
  );
}
