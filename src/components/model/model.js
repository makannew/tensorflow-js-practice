import React, { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import { useLinkedState } from "use-linked-state";

export default function Model({ modelGateway }) {
  const [model, setModel] = useLinkedState(modelGateway);
  const modelRef = useRef();
  useEffect(() => {
    const thisModel = tf.sequential();
    thisModel.add(tf.layers.dense({ inputShape: [1], units: 1 }));
    thisModel.add(tf.layers.dense({ units: 1 }));
    setModel(thisModel);
    tfvis.show.modelSummary(modelRef.current, thisModel);
  }, []);
  return <div ref={modelRef}></div>;
}
