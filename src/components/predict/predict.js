import React, { useRef } from "react";
import { useLinkedState } from "use-linked-state";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import style from "./predict.module.css";

export default function Predict({
  modelGateway,
  tensorsGateway,
  dataGateway,
  refreshGateway,
}) {
  const [refresh] = useLinkedState(refreshGateway);
  const [model] = useLinkedState(modelGateway);
  const [tensors] = useLinkedState(tensorsGateway);
  const [data] = useLinkedState(dataGateway);

  const resultRef = useRef();

  function tidyPrediction() {
    return tf.tidy(() => {
      const { inputsMin, inputsMax, labelsMin, labelsMax } = tensors;
      const input = tf.linspace(0, 1, 100);
      const pred = model.predict(input.reshape([100, 1]));
      // denormalizeing
      const denormX = input.mul(inputsMax.sub(inputsMin)).add(inputsMin);
      const denormY = pred.mul(labelsMax.sub(labelsMin)).add(labelsMin);
      //
      return [denormX.dataSync(), denormY.dataSync()];
    });
  }
  function doPrediction() {
    const [xs, ys] = tidyPrediction();
    const pred = Array.from(xs).map((item, i) => {
      return { x: item, y: ys[i] };
    });
    const originalData = data.map((item) => {
      return { x: item.horsepower, y: item.mpg };
    });

    // visualizing
    tfvis.render.scatterplot(
      resultRef.current,
      { values: [pred, originalData], series: ["predicted", "data"] },
      {
        xLabel: "Horsepower",
        yLabel: "MPG",
        height: 300,
      }
    );
  }

  return (
    <div className={style["container"]}>
      <button className="btn" onClick={doPrediction}>
        Do prediction
      </button>
      <div className={style["graph"]} ref={resultRef}></div>
    </div>
  );
}
