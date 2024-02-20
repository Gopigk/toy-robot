import clsx from "clsx";
import { TABLE_DIMENSION } from "config/constants";
import Robot from "container/Robot";
import React from "react";
import { arrayFromInteger } from "utils/utils";

export default function Table() {
  const rows = arrayFromInteger(TABLE_DIMENSION.y);

  const columns = arrayFromInteger(TABLE_DIMENSION.x);

  const renderRow = (rowIndex: number) => {
    return (
      <div className="flex" key={`row-${rowIndex}`}>
        {columns.map((squareIndex: number) => (
          <div
            className={clsx(
              "w-36 h-36",
              (rowIndex + squareIndex) % 2 === 0
                ? "bg-orange-300"
                : "bg-yellow-300"
            )}
            key={`square-${squareIndex}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-row">
      <img
        src="https://t4.ftcdn.net/jpg/05/26/01/61/360_F_526016183_0ITw0tKqIhpWHghGBhsvCBgRhHLsx9Yj.jpg"
        alt="robot"
        className="w-28 h-24"
      />
      <div className="flex flex-col relative">
        {rows.map((rowIndex: number) => renderRow(rowIndex))}
        <Robot />
      </div>
    </div>
  );
}
