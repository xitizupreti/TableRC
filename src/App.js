import React, { useState } from "react";
import Table from "./Table";

const App = () => {
  const [row, setrow] = useState("2");
  const [col, setcol] = useState("2");

  return (
    <div>
      Row :- <br />
      <input
        type="number"
        value={row}
        onChange={(e) => setrow(e.target.value)}
      />
      <br />
      <br />
      Col :- <br />
      <input
        type="number"
        value={col}
        onChange={(e) => setcol(e.target.value)}
      />
      <br />
      <br />
      <Table row={row} col={col} />
    </div>
  );
};

export default App;
