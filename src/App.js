import React, { useState, useRef } from "react";
import Table from "./Table";

const App = () => {
  const [row, setrow] = useState("2");
  const [col, setcol] = useState("2");
  const rowsRef = useRef(row)
  const columnsRef = useRef(col)

  return (
    <div>
      Row =
      <input
        type="number"
        name="row"
        id="row"
        value={row}
        onChange={(e) => setrow(e.target.value)}
        ref={rowsRef}
      />
      <br />
      Col =
      <input
        type="number"
        name="col"
        id="col"
        value={col}
        onChange={(e) => setcol(e.target.value)}
        ref={columnsRef}
      />
      <Table row={row} col={col} />
    </div>
  );
};

export default App;
