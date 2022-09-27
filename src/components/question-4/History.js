import React from "react";

const History = ({ action, before, after }) => {
  return (
    <div>
      {action} {before} {after}
    </div>
  );
};

export default History;
