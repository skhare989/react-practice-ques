import React from "react";
import "./Tile.css";
const Tile = ({ number, handleSelection, id, isSelected, isEliminated }) => {
  return (
    <div
      className={isEliminated ? "remove-tile" : "tile"}
      onClick={() => handleSelection(id)}>
      <div className={isSelected ? "number-show" : "number-hidden"}>
        {number}
      </div>
    </div>
  );
};

export default Tile;
