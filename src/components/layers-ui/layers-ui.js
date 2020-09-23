import React from "react";
import style from "./layers-ui.module.css";

export default function LayersUI({ layers, updateFunc, ACTIVATION }) {
  function addLayer() {
    const { layerNo, units, activation } = layers[layers.length - 1];
    const newLayer = { layerNo: layerNo + 1, units, activation };
    updateFunc((layers) => [...layers, newLayer]);
  }

  const removeLayer = (e) => {
    const value = Number(e.target.value);
    const newLayers = layers
      .filter((item) => item.layerNo !== value)
      .map((item, i) => ({ ...item, layerNo: i + 1 }));
    updateFunc((layers) =>
      layers
        .filter((item) => item.layerNo !== value)
        .map((item, i) => ({ ...item, layerNo: i + 1 }))
    );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const layerNo = Number(name.match(/(\d+)/)[0]);
    let value = e.target.value;
    let propName;
    if (name.includes("u-")) {
      propName = "units";
      value = Number(value);
      if (value < 1) {
        return;
      }
    }
    if (name.includes("a-")) {
      propName = "activation";
    }

    updateFunc((layers) =>
      layers.map((item) => {
        if (item.layerNo === layerNo) {
          return { ...item, [propName]: value };
        } else {
          return { ...item };
        }
      })
    );
  };

  return (
    <div className={style["container"]}>
      <div>
        <div className={style["table-header"]}>
          <span>Layer</span>
          <span>Units</span>
          <span>Activation</span>
          <span>Action</span>
        </div>
        {layers.map((item) => {
          return (
            <div className={style["item"]} key={item.layerNo}>
              <label>{item.layerNo}</label>
              {/* <label name={`u-${item.layerNo}`}>{`Units: `}</label> */}
              <input
                name={`u-${item.layerNo}`}
                type="number"
                min={1}
                max={100000}
                value={item.units}
                onChange={handleChange}
              />
              {/* <label htmlFor={`a-${item.layerNo}`}>{`Activation: `}</label> */}
              <select
                name={`a-${item.layerNo}`}
                onChange={handleChange}
                defaultValue={item.activation}
              >
                {ACTIVATION.map((opt, i) => (
                  <option key={`o-${i}`} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {layers.length !== 1 ? (
                <button
                  className="btn"
                  onClick={removeLayer}
                  value={item.layerNo}
                >
                  Delete
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
      <button className="btn" onClick={addLayer}>
        Add new layer
      </button>
    </div>
  );
}
