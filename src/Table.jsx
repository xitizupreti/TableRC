import React, { useEffect } from "react";

const Table = (rows, cols) => {

  useEffect(() => {
    console.log();
  }, [rows, cols]);

  const C = () => {
    console.log(cols);
    while (cols != 0) {
      return (
        <>
          <td></td>
        </>
      );
    }
    cols--;
  };
  const R = () => {
    console.log(rows);
    while (rows != 0) {
      return (
          <tr>{C()}</tr>
      );
    }
    rows--;
  };

  return (
    <>
      <table>
        <tbody>{R()}</tbody>
      </table>
    </>
  );
};

export default Table;
