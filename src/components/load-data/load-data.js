import React, { useEffect, useState } from "react";
import useDelayedFunction from "use-delayed-function";
import { useLinkedState } from "use-linked-state";
const DATA_URL = "https://storage.googleapis.com/tfjs-tutorials/carsData.json";
export default function LoadData({ dataGateway }) {
  const [data, setData] = useLinkedState(dataGateway);
  const [status, setStatus] = useState("loading...");
  const [delayedFetch, cancelDelayedFetch] = useDelayedFunction(fetchData);

  //
  async function fetchData() {
    const res = await fetch(DATA_URL);
    const data = await res.json();
    return data
      .map((car) => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
      }))
      .filter((car) => car.mpg != null && car.horsepower != null);
  }
  //
  function loadData() {
    setStatus("loading...");
    delayedFetch()
      .then((data) => {
        setData(data);
        setStatus("Dataset successfully loaded Click to re-load");
      })
      .catch((err) => {
        setStatus(err);
      });
  }

  useEffect(() => {
    loadData();
    return () => {
      cancelDelayedFetch();
    };
  }, []);
  return <div onClick={loadData}>{status}</div>;
}
