import React from "react";

const Table = ({ row, col }) => {
  let rowArray = [];
  let columnArray = [];
  for (let i = 0; i < row; i++) {
    rowArray = [...rowArray, i];
  }
  for (let j = 0; j < col; j++) {
    columnArray = [...columnArray, j];
  }

  return (
    <div className="fit">
      {rowArray.map((row, index) => {
        return (
          <section className="row" key={index}>
            R{index + 1}
            {columnArray.map((col, index) => {
              return (
                <div className="col" key={index}>
                  {row + 1},{col + 1}
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};

export default Table;
