import React, { useEffect, useRef } from "react";
import { useLinkedState } from "use-linked-state";
import * as tfvis from "@tensorflow/tfjs-vis";
import style from "./data-plot.module.css";

export default function DataPlot({ dataGateway, refreshGateway }) {
  const [data] = useLinkedState(dataGateway);
  const [refresh] = useLinkedState(refreshGateway);

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
  });

  return <div className={style["data-plot"]} ref={visDiv}></div>;
}
