import React from "react";
import "./styles.css";
import { SimpleGrid } from "./simpleGrid";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Grid will resize to fit container width</h2>
      <div style={{width: '100%', height: '500px'}}>
        <SimpleGrid />
      </div>
    </div>
  );
}
