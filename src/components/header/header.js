import React from "react";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style["header"]}>
      <h1>Practice the regression task through Tensorflow.js</h1>
      <p>
        The goal is predicting cars MPG (Miles per Gallon) from given
        Horsepower. It achieves by adjusting and training a model by the
        available dataset. Finally, evaluating the model by comparing the
        predicted values with the real one.
      </p>
    </div>
  );
}
