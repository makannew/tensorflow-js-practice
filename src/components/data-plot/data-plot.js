import React, { useEffect, useRef } from "react";
import { useLinkedState } from "use-linked-state";
import * as tfvis from "@tensorflow/tfjs-vis";

export default function DataPlot({ dataGateway }) {
  const [data, setData] = useLinkedState(dataGateway);
  const visDiv = useRef();
  useEffect(() => {
    if (data != null) {
      const values = data.map((d) => ({
        x: d.horsepower,
        y: d.mpg,
      }));

      tfvis.render.scatterplot(
        visDiv.current,
        { values },
        {
          xLabel: "Horsepower",
          yLabel: "MPG",
          height: 400,
        }
      );
    }
  }, [data]);
  return <div ref={visDiv}></div>;
}
