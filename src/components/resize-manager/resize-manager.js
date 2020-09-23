import { div } from "@tensorflow/tfjs";
import React, { useEffect } from "react";
import useDelayedFunction from "use-delayed-function";
import { useLinkedState } from "use-linked-state";

export default function ResizeManager({ refreshGateway }) {
  const [, setRefresh] = useLinkedState(refreshGateway);

  const [setRefreshBydelay] = useDelayedFunction(setRefresh, 200);
  useEffect(() => {
    window.addEventListener("resize", setRefreshBydelay);
    return () => {
      window.removeEventListener("resize", setRefreshBydelay);
    };
  });

  return <></>;
}
