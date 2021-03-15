import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { GridApi, GridReadyEvent } from "ag-grid-community";
import React, { useEffect, useState } from "react";

import { useContainerWidth } from "./useContainerWidth";
import { useWindowSize } from "./useWindowSize";

export function AgGridAutoResizeToContainer({
  onGridReady,
  theme = "ag-theme-alpine",
  debounce = 0,
  ...props
}: AgGridReactProps & { theme?: string; debounce?: number }) {
  const [gridApi, setGridApi] = useState<GridApi | undefined>();
  const [windowWidth] = useWindowSize(debounce);
  const {width: containerWidth, ref} = useContainerWidth(debounce);
  useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [windowWidth, containerWidth, gridApi]);

  function handleGridReady(event: GridReadyEvent) {
    if (onGridReady) {
      onGridReady(event);
    }
    setGridApi(event.api);
  }

  return (
    <div
      className={theme}
      ref={ref}
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact onGridReady={handleGridReady} {...props} />
    </div>
  );
}
