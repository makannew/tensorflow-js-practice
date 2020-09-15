import React, { useEffect } from "react";
import { useLinkedState } from "use-linked-state";
import * as tf from "@tensorflow/tfjs";

export default function Tensors({ dataGateway, tensorsGateway }) {
  const [data] = useLinkedState(dataGateway);
  const [, setTensors] = useLinkedState(tensorsGateway);
  useEffect(() => {
    if (data === null) return;
    const thisTensors = tf.tidy(() => {
      tf.util.shuffle(data);
      const inputs = data.map((item) => item.horsepower);
      const labels = data.map((item) => item.mpg);
      const inputsTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelsTensor = tf.tensor2d(labels, [labels.length, 1]);
      const inputsMax = inputsTensor.max();
      const inputsMin = inputsTensor.min();
      const labelsMax = labelsTensor.max();
      const labelsMin = labelsTensor.min();
      const inputsNormal = inputsTensor
        .sub(inputsMin)
        .div(inputsMax.sub(inputsMin));
      const labelsNormal = labelsTensor
        .sub(labelsMin)
        .div(labelsMax.sub(labelsMin));
      return {
        inputs: inputsNormal,
        labels: labelsNormal,
        inputsMin,
        inputsMax,
        labelsMin,
        labelsMax,
      };
    });
    setTensors(thisTensors);
  }, [data]);
  return <div></div>;
}
