import React from "react";
import github from "../../assets/github.png";
import style from "./links.module.css";
export default function Links() {
  return (
    <div className={style["container"]}>
      <div>
        <h6>By following google tutorial for</h6>
        <a
          href="https://codelabs.developers.google.com/codelabs/tfjs-training-regression/index.html#0"
          target="_blank"
          rel="noopener noreferrer"
        >
          TensorFlow.js — Making Predictions from 2D Data
        </a>
      </div>

      <a
        href="https://github.com/makannew/tensorflow-js-practice"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" />{" "}
      </a>
    </div>
  );
}
