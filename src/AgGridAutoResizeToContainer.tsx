import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { GridApi, GridReadyEvent } from "ag-grid-community";
import React, { useEffect, useState } from "react";

import { useDebounce } from "./useDebounce";
import { useWindowSize } from "./useWindowSize";

export function AgGridAutoResizeToContainer({
  onGridReady,
  theme = "ag-theme-alpine",
  debounce = 0,
  ...props
}: AgGridReactProps & { theme?: string; debounce?: number }) {
  const [gridApi, setGridApi] = useState<GridApi | undefined>();
  const [size, setSize] = useState<number | undefined>();
  const gridContainer = (element: HTMLDivElement) =>
    element && setSize(element.getBoundingClientRect().width);
  const debounceResize = useDebounce(size, debounce);
  const [windowWidth] = useWindowSize(debounce);

  useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [windowWidth, gridApi]);

  useEffect(() => {
    if (gridApi && debounceResize) {
      gridApi.sizeColumnsToFit();
    }
  }, [debounceResize, gridApi]);

  function handleGridReady(event: GridReadyEvent) {
    if (onGridReady) {
      onGridReady(event);
    }
    setGridApi(event.api);
  }

  return (
    <div
      className={theme}
      ref={gridContainer}
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact onGridReady={handleGridReady} {...props} />
    </div>
  );
}
