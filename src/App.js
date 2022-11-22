import React, { useState } from "react";
import Table from "./Table";

const App = () => {
  const [row, setrow] = useState("1");
  const [col, setcol] = useState("1");

  return (
    <>
      <div>
        Row = <input type="number" value={row} onChange={(e)=>setrow(e.target.value)} /> <br />
        Col = <input type="number" value={col} onChange={(e)=>setcol(e.target.value)} />
      </div>

      <div>
      <Table rows={row} cols={col}/>
      </div>
    </>
  );
};

export default App;
